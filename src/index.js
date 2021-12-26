import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import './home-work-5/App.css';
// import './home-work-7/styles.css';
// import './home-work-8/styles.css';

// import App from './home-work-1/App';
// import App from './home-work-2/App';
// import App from './home-work-3/App';
// import App from './home-work-5/App';
// import App from './home-work-6/App';
// import App from './home-work-7/App';
import App from './home-work-8/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
