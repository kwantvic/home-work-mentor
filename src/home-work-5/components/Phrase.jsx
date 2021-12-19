import React from 'react';

import './../App.css';

export default function Phrase({ arrPhrases }) {
  return (
    <div className="list">
      {arrPhrases.map((arr, index) => (
        <div key={index} className="block">
          <h3>{arrPhrases[index].split(',').join(' ')}</h3>
        </div>
      ))}
    </div>
  );
}
