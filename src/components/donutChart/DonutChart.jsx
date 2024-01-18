import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import './DonutChart.css'

const DonutChart = () => {
  const data = {
    labels: ['Retail', 'Distributor', 'Online','Corporate'],
    datasets: [
      {
        data: [30, 40, 20 , 10],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)','rgba(190,110,154,0.7'],
        // borderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(54,162,235,1)','rgba(190,110,154,1']
      },
    ],
  };

  const options = {
    plugins: {
      legend: {     
        position: 'bottom', // Set the legend position
        labels:{
          color:'white',
          font:{family:'Helvetica'},
        },
      },
    }
  };

  return (
    <div className='donut-chart'>
      <h2>SALES BY CHANNEL</h2>
      <br></br>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DonutChart;
