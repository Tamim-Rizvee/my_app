import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Infoss from './components/Infoss';
import ScrollPage from './components/ScrollPage';
import HomePage from './components/HomePage';
import Adminpage from './components/Adminpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Adminpage name = "Player"/>}>
          <Route index element={<Infoss />} />
          <Route path="infoss" element={<Navbar />} />
          <Route path="scrollpage" element={<ScrollPage />} />
          <Route path="homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
