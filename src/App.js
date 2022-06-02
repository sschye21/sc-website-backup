import React from 'react';
import Home from './pages/Home'
import ColourModal from './components/ColourModal';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColourModal />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
