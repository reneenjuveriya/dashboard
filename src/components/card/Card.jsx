import React from 'react';
import './Card.css'; // Import the card styling (create this file in the same directory)

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
