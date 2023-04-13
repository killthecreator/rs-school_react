import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/Notfoundpage/Notfoundpage';
import AboutPage from './pages/Aboutpage/Aboutpage';
import FormPage from './pages/Formpage/Formpage';

import './App.scss';

const App = () => (
  <div className="App">
    <header>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
