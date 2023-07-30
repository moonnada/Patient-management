import React, { useEffect, useState } from 'react';
import './home.scss';
import { db } from '../../firebase';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Widget from '../widget/Widget';
import Featured from '../featured/Featured';
import Chart from '../chart/Chart';
import { collection, onSnapshot } from 'firebase/firestore';
const Home = () => {
  const [patientsInfo, setPatientsInfo] = useState({});

  useEffect(() => {
    onSnapshot(collection(db, 'patients'), (snapshot) => {
      setPatientsInfo(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" patientsInfo={patientsInfo} />
        </div>
        <div className="charts">
          <Featured patientsInfo={patientsInfo} />
          <Chart patientsInfo={patientsInfo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
