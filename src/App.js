import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NewLogin from './components/NewLogin';
import TextBox from './components/TextBox';
import Navbar from './components/Navbar';
import PhotoSlider from './components/PhotoSlider';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLogin />} />
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
