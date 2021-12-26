import React from 'react';
import { Link } from 'react-router-dom';

export default function Article({ id }) {
  return (
    <div>
      <h1>Статья №{id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
        aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
        Impedit nemo ducimus fuga rem!
      </p>
      <Link href="/">
        <button>Назад</button>
      </Link>
    </div>
  );
}
