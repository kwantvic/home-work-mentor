import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      let resp = await fetch('https://61cae79f194ffe0017788a25.mockapi.io/user1');
      if (resp.ok) {
        let result = await resp.json();
        setUsers(result);
      } else {
        throw new Error(resp.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  }

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
    </div>
  );
}
