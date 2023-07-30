import React, { useEffect, useState } from 'react';
import './home.scss';
import { signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Widget from '../widget/Widget';
import Featured from '../featured/Featured';
import Chart from '../chart/Chart';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
const Home = () => {
  const { id } = useParams();
  const getPatient = doc(db, `patients/${id}`);
  const [patientsInfo, setPatientsInfo] = useState({});

  useEffect(() => {
    onSnapshot(collection(db, 'patients'), (snapshot) => {
      setPatientsInfo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log('patient', patientsInfo);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" patientsInfo={patientsInfo}/>
        </div>
        <div className="charts">
          <Featured patientsInfo={patientsInfo}/>
          <Chart patientsInfo={patientsInfo}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
