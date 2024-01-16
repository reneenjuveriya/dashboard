import React from 'react';
import Navbar from './components/navBar/Navbar';
import Navbar2 from './components/navBar/Navbar2';
import './App.css'; // You can customize the styling in App.css
import Card from './components/card/Card';
import LineChart from './components/lineChart/LineChart';
import BarChart from './components/barChart/BarChart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <h1 style={{padding:"20px 0px 0px 30px"}}>  Sales Overview</h1>
      <div className="card-container">
        <Card title="Number of Sales" content="50" />
        <Card title="Revenue" content="$100,000" />
        <Card title="Profit" content="$40,000" />
        <Card title="Cost" content="$60,000" />
      </div>
      <div>
      <LineChart/>
      <BarChart/>
      </div>
      {/* Add your main content here */}
      <div className="main-content">
      
      </div>
    </div>
  );
}

export default App;
