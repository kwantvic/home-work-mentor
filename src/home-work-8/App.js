import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdressForm from './forms/AdressForm';
import PersonalInfoForm from './forms/PersonalInfoForm';
import Button from '@mui/material/Button';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './styles.css';
import Result from './forms/Result';
import InfoForm from './forms/InfoForm';

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Слишком короткое имя!'),
  lastName: yup.string().min(3, 'Слишком короткая фамилия!'),
  email: yup.string().email('Неверная почта!').required('Укажите почту!'),
});

function App() {
  const [formValues, setFormVelues] = React.useState({});
  const navigate = useNavigate();

  const nextStep = (name) => {
    navigate(name);
  };

  const onSubmit = (values) => {
    // nextStep('adress');
    // onReset();
    console.log(values, '🩸myTest🧩');
  };

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={<PersonalInfoForm nextStep={nextStep} setFormVelues={setFormVelues} />}
        />
        <Route
          path="/adress"
          exact
          element={<AdressForm nextStep={nextStep} setFormVelues={setFormVelues} />}
        />
        <Route path="/result" exact element={<Result formValues={formValues} />} />

        <Route
          path="/context"
          exact
          element={
            <>
              <FormProvider {...methods}>
                <InfoForm />
              </FormProvider>
              <Button
                onClick={methods.handleSubmit(onSubmit)}
                type="submit"
                variant="contained"
                color="secondary">
                Далее
              </Button>
            </>
          }
        />
      </Routes>
      <Button onClick={() => nextStep('context')} variant="contained" color="secondary">
        use Form Context
      </Button>
    </div>
  );
}

export default App;
