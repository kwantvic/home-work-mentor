import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.css';

function App() {
  const { handleSubmit, register, formState, reset } = useForm();

  const onSubmit = (values) => {
    console.log('ФОРМА!', values);
    onReset();
    return null;
  };

  function onReset() {
    return reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      about: '',
    });
  }

  console.log('❌ ', formState.errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            {...register('firstName', {
              required: 'Это обязательное поле!',
            })}
            helperText={formState.errors.firstName && formState.errors.firstName.message}
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Фамилия"
            {...register('lastName', {
              required: 'Это обязательное поле!',
            })}
            helperText={formState.errors.lastName && formState.errors.lastName.message}
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register('email', {
              required: 'Это обязательное поле!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: 'Это неверная почта!',
              },
            })}
            helperText={formState.errors.email && formState.errors.email.message}
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register('password', {
              required: 'Это обязательное поле!',
            })}
            helperText={formState.errors.password && formState.errors.password.message}
            error={!!formState.errors.password}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField {...register('about')} name="about" label="Обо мне" fullWidth />
        </div>
        <br />
        <div className="row">
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button onClick={onReset} variant="contained" color="secondary">
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
