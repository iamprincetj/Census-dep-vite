// src/App.tsx
import React from 'react';
import Card from './Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="cards">
      <Card
        imgSrc="/assets/lakeview-elegance.png"
        altText="Lakeview Elegance"
        title="Lakeview Elegance"
        address="258 Serenity Lane, Crestwood Hills"
        content="This is the content of the first card. It can be a brief description or any information you want to highlight."
      />
      {/* Add more <Card /> components as needed */}
    </div>
  );
};

export default App;
