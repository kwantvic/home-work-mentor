import React from 'react';
import FormField from '../components/FormField';
import Button from '@mui/material/Button';

export default function InfoForm({ reset, nextStep, setFormVelues, handleSubmit }) {
  return (
    <form>
      <div className="row">
        <FormField name="firstName" label="Имя" />
        <FormField name="lastName" label="Фамилия" />
        <FormField name="email" label="E-Mail" />
      </div>
      <Button variant="contained" color="secondary">
        Очистить
      </Button>
      <Button type="submit" variant="contained" color="secondary">
        Далее
      </Button>
    </form>
  );
}
