import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  city: yup.string().required('Укажите город!'),
  street: yup.string().required('Укажите улицу!'),
  appartment: yup.number('Должен быть числом!').min(2, 'Укажите номер квартиры!'),
});

export default function AdressForm({ nextStep, setFormVelues }) {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      city: '',
      street: '',
      appartment: 0,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    setFormVelues((prev) => {
      return { ...prev, ...values };
    });
    nextStep('result');
    reset();
  };

  console.log('❌ ', formState.errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          name="city"
          label="Город"
          {...register('city')}
          helperText={formState.errors.city && formState.errors.city.message}
          error={!!formState.errors.city}
          fullWidth
        />
        <TextField
          name="street"
          label="Улица"
          {...register('street')}
          helperText={formState.errors.street && formState.errors.street.message}
          error={!!formState.errors.street}
          fullWidth
        />
        <TextField
          name="appartment"
          label="Номер квартиры"
          {...register('appartment')}
          helperText={formState.errors.appartment && formState.errors.appartment.message}
          error={!!formState.errors.appartment}
          type="number"
          fullWidth
        />
      </div>
      <br />
      <div className="row buttons">
        <Button onClick={() => reset()} variant="contained" color="secondary">
          Очистить
        </Button>
        <Button type="submit" variant="contained" color="secondary">
          Далее
        </Button>
      </div>
    </form>
  );
}
