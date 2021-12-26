import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Article from './components/Article/index';
import Header from './components/Header';
import Footer from './components/Footer/index';
import Home from './Pages/Home';
import About from './Pages/About';
// import Route from './components/Route';
import NotFound from './Pages/NotFound';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:id" element={<Article />} exact />
        <Route path="/about" exact element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}
