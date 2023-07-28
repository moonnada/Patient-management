import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import './single.scss';
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="details">
                <h2 className="itemTitle">Jone Doe</h2>
                <div className="detailItem">
                  <span className="itemKey">Date of Birth : </span>
                  <span className="itemValue">12/12/2000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status : </span>
                  <span className="itemValue">Active</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Patient Address : </span>
                  <span className="itemValue">Santa Clara, CA</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Family Address : </span>
                  <span className="itemValue">LA CA</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Memo : </span>
                  <span className="itemValue">
                    Weight: 170 lb, Height: 5,08 in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
