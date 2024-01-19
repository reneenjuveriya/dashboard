import React from 'react';
import Navbar from './components/navBar/Navbar';
import Navbar2 from './components/navBar/Navbar2';
import './App.css';
import Card from './components/card/Card';
import LineChart from './components/lineChart/LineChart';
import BarChart from './components/barChart/BarChart';
import DonutChart from './components/donutChart/DonutChart';
import SubNav from './components/subNavBar/subNavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clothing from './containers/Clothing/Clothing';
import Footwear from './containers/Footwear/Footwear';
import Accessories from './containers/Accessories/Accessories';
import SalesGrowth from './components/SalesGrowthBarChart/SalesGrowth';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Navbar2 />
        <h1 style={{ padding: "20px 0px 0px 30px" }}>  Sales Overview</h1>
        <div className="card-container">
          <Card title="Number of Sales" content="50" />
          <Card title="Revenue" content="$100,000" />
          <Card title="Profit" content="$40,000" />
          <Card title="Cost" content="$60,000" />
        </div>
        <div className='chart-container'>
          <DonutChart />
          <LineChart />
        </div>
        <SalesGrowth />
        <div>
          <SubNav />
        </div>

        <div className="main-content">
          <Routes>
            <Route exact path="/BarChart" element={<BarChart />} />
            <Route path="/Clothing" element={<Clothing />} />
            <Route path="/Footwear" element={<Footwear />} />
            <Route path="/Accessories" element={<Accessories />} />
          </Routes>

        </div>
      </Router>

    </div>
  );
}

export default App;
