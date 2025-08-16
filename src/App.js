import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Infoss from './components/Infoss';
import ScrollPage from './components/ScrollPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScrollPage />} />
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
