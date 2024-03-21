import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage';
import FooterPage from './pages/FooterPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/header" element={<HeaderPage />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
