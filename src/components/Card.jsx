// components/Card.jsx
import React from 'react';

const Card = ({ imgSrc, altText, title, address, content }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={altText} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{address}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
