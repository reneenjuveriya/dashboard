import React,{useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import './LineChart.css';


const LineChart = () => {
    const [selectedDataPeriod, setSelectedDataPeriod] = useState('6Months');
  
    const handleChangeDataPeriod = (event) => {
      setSelectedDataPeriod(event.target.value);
    };
  
    const data = {
      labels: selectedDataPeriod === '8Months' ? ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] : ['June','July','August','September','October','November','December'],
      datasets: [
        {
          label: 'Clothing',
          borderColor: 'rgba(75,192,192,1)',
          data: [65, 59, 72, 62, 56, 55, 40, 63, 70, 53, 45, 63, 72],
        },
        {
          label: 'Footwear',
          borderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 32, 56, 47, 40, 50 , 60, 43,55, 40, 63],
        },
        {
          label: 'Accessories',
          borderColor: 'rgba(54,162,235,1)',
          data: [45, 55, 67, 78, 60, 58, 70, 55, 63, 42, 57, 62, 43],
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color:'white',
            size:13,
            font: {
                family:'Helvetica',
                size: 13, 
            },
        },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color:'white',
            size:13,
            font: {
              family:'Helvetica',
              size:13,
            },
        },
        },
      },
    };
  
    return (
      <div className='line-chart-container'>
      <div className='line-chart'>
        <h2>SALES</h2>
        <div className="dropdown-container">
          <label htmlFor="dataPeriodDropdown">Select Data Period : </label>
          <select
            id="dataPeriodDropdown"
            value={selectedDataPeriod}
            onChange={handleChangeDataPeriod}
          >
            <option value="8Months">12 Months</option>
            <option value="4Months">6 Months</option>
          </select>
        </div>
        <Line data={data} options={options} />
      </div>
      </div>
    );
  };
  
  export default LineChart;