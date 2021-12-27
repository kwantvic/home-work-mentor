import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdressForm from './forms/AdressForm';
import PersonalInfoForm from './forms/PersonalInfoForm';

import './styles.css';
import Result from './forms/Result';

function App() {
  const [formValues, setFormVelues] = React.useState({});
  const navigate = useNavigate();

  const nextStep = (name) => {
    navigate(name);
  };
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
      </Routes>
    </div>
  );
}

export default App;
