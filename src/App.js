import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Mainpage from './Components/Mainpage';
import MainLayouts from './Layout/MainLayouts';
import Signup from './Components/Signup';
import Loginpage from './Components/Loginpage';
import History from './Components/History';
import Favorites from './Components/Favorites';
import ProverbsPage from './Components/ProverbsPage';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/history" element={<History />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/Proverb" element={<ProverbsPage />} />
          </Routes>
        </MainLayouts>
      </BrowserRouter>
    </div>
  );
}

export default App;
