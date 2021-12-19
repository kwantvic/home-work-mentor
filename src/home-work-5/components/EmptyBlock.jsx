import React from 'react';

import './../App.css';
import logo from './../img/ghost.jpeg';

export default function EmptyBlock() {
  return (
    <div className="block empty-block">
      <img src={logo} width="60px" height="60px" alt="Ghost" />
      <h2>Список фраз пустой</h2>
      <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
    </div>
  );
}
