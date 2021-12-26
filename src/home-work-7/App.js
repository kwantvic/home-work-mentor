import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Article from './components/Article/index';
import Header from './components/Header';
import Footer from './components/Footer/index';
import Home from './Pages/Home';
import About from './Pages/About';
// import Route from './components/Route';

export default function App() {
  const { pathname } = window.location;

  let namePath = 'post';

  function getPathId(name) {
    return pathname.replace(`/${name}/`, '');
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/" element={<Article id={getPathId(namePath)} />} />
        <Route path="/about" exact element={About} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}
