import React from 'react';

import './App.scss';

import Reviews from './components/Reviews/index';
import Feedback from './components/Feedback/index';

// {
//   fullName: "Вася Пупкин",
//   email: "vasya@mail.ru",
//   createdAt: "Thu Oct 14 2021 13:41:01",
//   text: "....."
// }

export default function App() {
  const [comments, setComments] = React.useState([
    {
      fullName: 'Вася Пупкин',
      email: 'vasya@mail.ru',
      createdAt: '12.12.2021 23:54',
      text: 'что-то ничего не работает(',
    },
  ]);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  // React.useEffect(() => {
  //   let localStorageComments = localStorage.getItem('comments');
  //   setComments(localStorageComments);
  // }, []);

  function formaDate(date) {
    return date
      .toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
      })
      .replace(/ /g, '')
      .replace(/,/g, ' ');
  }

  function sendComments(fullName, email, text) {
    if (!fullName.trim() || !email.trim() || !text.trim()) {
      alert('❗️Заполните поля формы!');
    } else {
      let createdAt = formaDate(new Date());
      let user = {};
      user.fullName = fullName;
      user.email = email;
      user.createdAt = createdAt;
      user.text = text;
      setComments([...comments, user]);
    }
  }

  return (
    <div className="app">
      <Reviews comments={comments} />
      <Feedback sendComments={sendComments} />
    </div>
  );
}
