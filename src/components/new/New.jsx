import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

const New = ({ inputs }) => {
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
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === 'textarea' ? (
                    <textarea name={input.id} />
                  ) : (
                    <input type={input.type} />
                  )}
                </div>
              ))}

              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
