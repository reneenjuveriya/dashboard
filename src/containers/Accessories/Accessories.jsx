import React from "react";
import Table from "../../components/Table/Table";
import './Accessories.css'
import HorizontalBarChart from "../../components/horizontalBarChart/horizontalBarChart";
import '../../components/Table/Table.css'

const Accessories= () => {

    const data1 = [
        { accessories: 'Man', percentage: '35%' },
        { accessories: 'Women', percentage: '40%' },
        { accessories: 'Kids', percentage: '25%' }
      ];
    
    const heading1=['Accessories','Percentage'];

    return(
        <div className="accessories-container">
            <Table data={data1} heading={heading1} />
            <HorizontalBarChart/>
        </div>


    );
};

export default Accessories;