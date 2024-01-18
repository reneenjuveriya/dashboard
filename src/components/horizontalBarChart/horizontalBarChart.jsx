import React from 'react';
import { Bar } from 'react-chartjs-2';
import './horizontalBarChart.css'

const HorizontalBarChart = () => {
  const data = {
    labels: ['Men', 'Women', 'Kids'],
    datasets: [
      {
        label: 'Profit %',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: [50, 30, 70],
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        ticks:{
            color:'white',
            size:14,
            font:{
              family:'Helvetica',
              size:13,
            },
          },
      },
      y: {
        beginAtZero: true,
        ticks:{
            color:'white',
            size:14,
            font:{
              family:'Helvetica',
              size:13,
            },
          },
      },
    },
  };

  return (
    <div className="horizontal-bar-chart">
      <h2>PROFIT PERCENTAGE

      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
