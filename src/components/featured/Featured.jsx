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

const Featured = ({ patientsInfo }) => {
  const statusCounts = Array.isArray(patientsInfo)
    ? patientsInfo.reduce((counts, patient) => {
        const status = patient.status;
        counts[status] = (counts[status] || 0) + 1;
        return counts;
      }, {})
    : {};
  const data = [
    {
      name: 'Inquiry',
      Status: 0, // Initialize with 0, so the bar will appear even if there are no patients with this status
    },
    {
      name: 'Onboarding',
      Status: 0,
    },
    {
      name: 'Active',
      Status: 0,
    },
    {
      name: 'Churned',
      Status: 0,
    },
  ];
  // Generate chartData based on all possible status names
  const chartData = data.map((entry) => ({
    name: entry.name,
    Status: statusCounts[entry.name] || 0,
  }));

  return (
    <div className="featured">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Status" barSize={20} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Featured;
