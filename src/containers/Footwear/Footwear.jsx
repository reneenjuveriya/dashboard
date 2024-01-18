import React from "react";
import Table from "../../components/Table/Table";
import './Footwear.css'
import HorizontalBarChart from "../../components/horizontalBarChart/horizontalBarChart";
import '../../components/Table/Table.css'

const Footwear= () => {

    const data1 = [
        { footwear: 'Man', percentage: '35%' },
        { footwear: 'Women', percentage: '40%' },
        { footwear: 'Kids', percentage: '25%' }
      ];
    
    const heading1=['Footwear','Percentage'];

    return(
        <div className="footwear-container">
            <Table data={data1} heading={heading1} />
            <HorizontalBarChart/>
        </div>


    );
};

export default Footwear;