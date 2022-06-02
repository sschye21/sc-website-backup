import React from 'react';
import Home from './pages/Home'
import ColourModal from './components/ColourModal';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom';

function App () {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ColourModal />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
