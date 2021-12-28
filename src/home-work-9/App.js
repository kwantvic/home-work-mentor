import axios from 'axios';
import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);

  const [isUpLoading, setIsUpLoading] = React.useState(false);

  async function getUsers() {
    // try {
    //   let resp = await fetch('https://61cae79f194ffe0017788a25.mockapi.io/user');
    //   if (resp.ok) {
    //     let result = await resp.json();
    //     setUsers(result);
    //   } else {
    //     throw new Error(resp.statusText);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    const { data } = await axios.get('https://61cae79f194ffe0017788a25.mockapi.io/user');
    setUsers(data);
  }

  function createUser() {
    const emailElem = document.querySelector('#email');
    const usernameElem = document.querySelector('#username');
    const data = {
      email: emailElem.value,
      name: usernameElem.value,
    };
    axios.post('https://61cae79f194ffe0017788a25.mockapi.io/user', data);
  }

  const uploadFile = async () => {
    const fileElem = document.querySelector('#file');
    const file = fileElem.files[0];

    setIsUpLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    await axios.post('http://localhost:9999', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setIsUpLoading(false);
  };

  return (
    <div>
      <ul>
        <li>
          <h3>Список участников: {users.length}</h3>
        </li>
        {users.map((obj) => (
          <li key={obj.id}>
            <h4>{obj.name}</h4>
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
      <br />

      <hr />
      <input type="text" id="email" placeholder="mail" />
      <input type="text" id="username" placeholder="name" />
      <button onClick={createUser}>Отправить</button>
      <br />
      <hr />

      <div>
        <h4>Загрузка файла:</h4>
        <input type="file" id="file" />
        <button disabled={isUpLoading} onClick={uploadFile}>
          Загрузить
        </button>
        {isUpLoading && (
          <p>
            <b>Идет загрузка...</b>
          </p>
        )}
      </div>
    </div>
  );
}
