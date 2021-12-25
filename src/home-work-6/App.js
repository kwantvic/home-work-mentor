import React from 'react';

import './App.scss';

import Reviews from './components/Reviews/index';
import Feedback from './components/Feedback/index';

const localStorageComments = JSON.parse(localStorage.getItem('comments'))
  ? JSON.parse(localStorage.getItem('comments'))
  : [];

export default function App() {
  const [comments, setComments] = React.useState(localStorageComments);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  React.useEffect(() => {
    setComments(localStorageComments);
  }, []);

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
      user.avatar = `http://source.unsplash.com/50x50/?people&${comments.length}`;
      setComments([...comments, user]);
    }
  }

  function removeComment(text) {
    let newCommets = comments.filter((obj) => obj.text !== text);
    setComments(newCommets);
  }

  return (
    <div className="app">
      <Reviews comments={comments} removeComment={removeComment} />
      <Feedback sendComments={sendComments} />
    </div>
  );
}
