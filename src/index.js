import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cardapio from './pages/Cardapio';
import Ladingpg from './pages/Ladingpg';
import Admin from './pages/Admin';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/ladingpg" element={<Ladingpg />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
