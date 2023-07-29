import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import {
  doc,
  serverTimestamp,
  setDoc,
  addDoc,
  collection,
} from 'firebase/firestore';
import FormControl from '@mui/base/FormControl';
import Input, { inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import { db, auth } from '../../firebase';
const New = ({ inputs }) => {
  const [data, setData] = useState({});

  const [fullname, setFullname] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatue] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [familyAddress, setFamilyAddress] = useState('');
  const [memo, setMemo] = useState('');

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log('this is data', data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'patients'), {
        ...data,
        timeStamp: serverTimestamp(),
      });
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
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
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
              <label>Age</label>
              <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label>Status</label>
              <select
                required
                value={status}
                onChange={(e) => setStatue(e.target.value)}
              >
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
            </form>
            {/* <FormControl onSubmit={handleAdd} defaultValue="" required>
              <div className="formInput" key={inputs.id}>
                <label>Fullname</label>
                <StyledInput placeholder="Write your name here" />
                <HelperText />
                {input.type === 'textarea' ? (
                  <textarea
                    name={input.id}
                    id={input.id}
                    onChange={handleInput}
                  />
                ) : (
                  <input
                    type={input.type}
                    id={input.id}
                    onChange={handleInput}
                  />
                )}
              </div>
              )<button type="submit">Add</button>
            </FormControl> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
