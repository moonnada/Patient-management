import React from 'react';
import './chart.scss';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '0 ~ 10s', Total: 10 },
  { name: '11 ~ 20s', Total: 30 },
  { name: '21 ~ 30s', Total: 13 },
  { name: '31 ~ 40s', Total: 30 },
  { name: '41 ~ 50s', Total: 10 },
  { name: '51 ~ 60s', Total: 20 },
  { name: '61 ~ 70s', Total: 8 },
  { name: '71 ~ 80s', Total: 6 },
  { name: '81 ~ 90s', Total: 11 },
  { name: '91 ~ 100s', Total: 33 },
];
const Chart = () => {
  return (
    <div className="chart">
      <div>Patient Age Group</div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* Update the dataKey and add stackId */}
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" stackId="1" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
