import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import HomePage from './pages/Homepage';
import NotFoundPage from './pages/Notfoundpage';
import AboutPage from './pages/Aboutpage';

import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
