import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/Notfoundpage/Notfoundpage';
import AboutPage from './pages/Aboutpage/Aboutpage';
import FormPage from './pages/Formpage/Formpage';

import './App.scss';

export default () => (
  <div className="App">
    <Router>
      <header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav__item">
              <Link to="/form">Form</Link>
            </li>
            <li className="nav__item">
              <Link to="/404">404</Link>
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
    </Router>
  </div>
);
