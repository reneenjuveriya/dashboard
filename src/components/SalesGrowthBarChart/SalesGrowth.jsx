import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import './SalesGrowth.css';

const SalesGrowth = () => {
  const data = {
    labels: ['2017','2018', '2019', '2020','2021','2022','2023'],
    datasets: [
      {
        label: 'Sales %',
        backgroundColor: ['rgba(75,192,192,0.3)', 'rgba(255,99,132,0.3)', 'rgba(54,162,235,0.3)'],
        borderColor: ['rgba(75,192,192,1.2)', 'rgba(255,99,132,1.2)', 'rgba(54,162,235,1.2)'],
        borderWidth: 1.2,
        barThickness:50,
        data: [50 , 65, -25, -35, 40, 50, 65],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
            color: 'rgba(0, 255, 0, 0.1)',
            zeroLineColor: 'rgba(255, 0, 0, 1)',
        },
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
        grid: {
            color: 'rgba(0, 255, 0, 0.1)',
            zeroLineColor: 'rgba(255, 0, 0, 1)',
        },
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
    <div className='hbar-chart-container'>
    <div className='hbar-chart'>
      <h2>Sales Growth</h2>
      <Bar data={data} options={options} />
    </div>
    </div>
  );
};

export default SalesGrowth;
