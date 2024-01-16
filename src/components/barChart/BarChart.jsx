import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import './BarChart.css';

const BarChart = () => {
  const data = {
    labels: ['Clothing', 'Footwear', 'Accessories'],
    datasets: [
      {
        label: 'Sales %',
        backgroundColor: ['rgba(75,192,192,0.3)', 'rgba(255,99,132,0.3)', 'rgba(54,162,235,0.3)'],
        borderColor: ['rgba(75,192,192,1.2)', 'rgba(255,99,132,1.2)', 'rgba(54,162,235,1.2)'],
        borderWidth: 1.2,
        data: [65, 45, 80],
      },
    ],
  };

  const options = {
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
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
          font:{
            family:'Helvetica',
            size:13,
          },
          color:'white',
          size:13,
      },
    },
    },
  };

  return (
    <div className='bar-chart-container'>
    <div className='bar-chart'>
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
    </div>
  );
};

export default BarChart;
