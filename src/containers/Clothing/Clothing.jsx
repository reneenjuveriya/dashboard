import React from "react";
import Table from "../../components/Table/Table";
import './Clothing.css'
import HorizontalBarChart from "../../components/horizontalBarChart/horizontalBarChart";
import '../../components/Table/Table.css'

const Clothing= () => {

    const data1 = [
        { clothing: 'Man', percentage: '35%' },
        { clothing: 'Women', percentage: '40%' },
        { clothing: 'Kids', percentage: '25%' }
      ];
    
    const heading1=['Clothing','Percentage'];

    return(
        <div className="clothing-container">
            <Table data={data1} heading={heading1} />
            <HorizontalBarChart/>
        </div>


    );
};

export default Clothing;