import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function FormField({ name, label }) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <TextField
      name={name}
      label={label}
      {...register(name)}
      helperText={errors[name] && errors[name].message}
      error={!!errors[name]}
      fullWidth
    />
  );
}
