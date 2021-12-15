import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 796,
  margin: 'auto',
  paddingTop: 50,
};

const style__input = {
  width: 797,
  height: 97,
  marginBottom: 48,
  fontSize: 62,
};

const style__button = {
  width: 247,
  height: 97,
  fontSize: 62,
};

export default function Form() {
  let email = '',
    password = '';

  function onChangeInput(e) {
    if (e.target.name === 'email') {
      email = e.target.value;
    } else {
      password = e.target.value;
    }
  }

  function handleSubmit(e) {
    if (!email.trim() || !password.trim()) {
      alert('❗️Заполните поля формы!');
    } else {
      console.log({ email, password });
    }

    e.preventDefault();
    e.target[0].value = '';
    e.target[1].value = '';
    email = '';
    password = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={style}>
        <input
          onChange={onChangeInput}
          style={style__input}
          name="email"
          type="text"
          placeholder="E-Mail"
        />
        <input
          onChange={onChangeInput}
          style={style__input}
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <button style={style__button} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
