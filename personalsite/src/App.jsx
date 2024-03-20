import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage';
import FooterPage from './pages/FooterPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
