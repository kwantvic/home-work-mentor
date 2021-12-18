import React from 'react';
import EmptyBlock from './components/EmptyBlock';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <EmptyBlock />
      <button className="btn btn_generate">Сгенерировать</button>
      <button className="btn btn_clear">Очистить</button>
    </div>
  );
}

export default App;
