import React from 'react';
import './featured.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Inquiry',
    Status: 4,
  },
  {
    name: 'Onboardig',
    Status: 18,
  },
  {
    name: 'Active',
    Status: 9,
  },
  {
    name: 'Churned',
    Status: 8,
  },
];



const Featured = () => {
  return (
    <div className='featured'>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="Status" barSize={20} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Featured;
