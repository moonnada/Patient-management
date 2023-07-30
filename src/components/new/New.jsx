import React, { useEffect, useState } from 'react';
import './new.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [fullname, setFullname] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatue] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [familyAddress, setFamilyAddress] = useState('');
  const [memo, setMemo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate the age based on the selected date of birth
    const calculateAge = () => {
      if (!dateofBirth) return; // Return if dateofBirth is empty
      const birthDate = new Date(dateofBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setAge(age.toString()); // Update the age state with the calculated age
    };

    calculateAge(); // Call the calculateAge function when dateofBirth changes
  }, [dateofBirth]);

  //Add new patient to the database
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'patients'), {
        fullname,
        dateofBirth,
        age,
        status,
        patientAddress,
        familyAddress,
        memo,
      });
      navigate('/patients');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Patient</h1>
        </div>
        <div className="create">
          <form onSubmit={handleAdd}>
            <label>Fullname</label>
            <input
              type="text"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label>Date of Birth</label>
            <input
              type="date"
              required
              value={dateofBirth}
              onChange={(e) => setDateofBirth(e.target.value)}
            />

            <label>Status</label>
            <select
              required
              value={status}
              onChange={(e) => setStatue(e.target.value)}
            >
              <option value="OPTION">CHOOSE A STATUS</option>
              <option value="Active">Active</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Onboarding">Onboarding</option>
              <option value="Churned">Churned</option>
            </select>
            <label>Patient Address</label>
            <input
              type="text"
              required
              onChange={(e) => setPatientAddress(e.target.value)}
            />
            <label>Family Address</label>
            <input
              type="text"
              required
              onChange={(e) => setFamilyAddress(e.target.value)}
            />
            <label>Memo</label>
            <textarea
              required
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
            <button>Add Patient</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
