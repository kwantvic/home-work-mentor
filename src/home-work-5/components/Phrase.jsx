import React from 'react';

export default function Phrase({ arrPhrases }) {
  return (
    <div className="list">
      {arrPhrases.map((arr, index) => (
        <div key={index} className="block">
          <h3>{arrPhrases[index].join().split(',').join(' ')}</h3>
        </div>
      ))}
    </div>
  );
}
