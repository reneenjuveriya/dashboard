import React from 'react';
import './Table.css';


const Table = ({ data = [], heading }) => {

  return (
    <div className="table">
    <table>
      <thead>
        <tr>
          {heading.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {heading.map((head, colIndex) => (
              <td key={colIndex}>{item[head.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;