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
const Chart = ({ patientsInfo }) => {
  // Function to calculate the age range for each patient
  const getAgeRange = (age) => {
    const lowerBound = Math.floor(age / 10) * 10;
    const upperBound = lowerBound + 10;
    return `${lowerBound} ~ ${upperBound -1}s`;
  };

  // Calculate the counts for each age range
  const ageCounts = Array.isArray(patientsInfo)
    ? patientsInfo.reduce((counts, patient) => {
        const ageRange = getAgeRange(patient.age);
        counts[ageRange] = (counts[ageRange] || 0) + 1;
        return counts;
      }, {})
    : {};

  // Function to generate the data array with counts for each age group, filling in missing age groups with 0 counts
  const generateDataArray = () => {
    const data = [];
    for (let lowerBound = 0; lowerBound <= 100; lowerBound += 10) {
      const ageRange = getAgeRange(lowerBound);
      data.push({
        name: ageRange,
        Total: ageCounts[ageRange] || 0,
      });
    }
    return data;
  };

  // Get the data array
  const data = generateDataArray();

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
          <YAxis allowDecimals={false} />
          <Tooltip />
          {/* Update the dataKey and add stackId */}
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#A076F9"
            fill="#8CC0DE"
            stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
