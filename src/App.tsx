import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/Notfoundpage/Notfoundpage';
import AboutPage from './pages/Aboutpage/Aboutpage';
import FormPage from './pages/Formpage/Formpage';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav className="py-7 bg-gray-100">
          <ul className="flex justify-center gap-x-14">
            <li className="transition ease-in duration-300 hover:scale-110">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'underline scale-105 font-bold' : 'no-underline font-semibold'
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="transition ease-in duration-300 hover:scale-110">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'underline scale-105 font-bold' : 'no-underline font-semibold'
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="transition ease-in duration-300 hover:scale-110">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'underline scale-105 font-bold' : 'no-underline font-semibold'
                }
                to="/form"
              >
                Form
              </NavLink>
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
};

export default App;
