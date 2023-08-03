import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import RouteWithContainer from './components/layout/RoutWithContainer';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RouteWithContainer><Home /></RouteWithContainer>} />
        <Route path="/projects" element={<RouteWithContainer><Projects /></RouteWithContainer>} />
        <Route path="/contact" element={<RouteWithContainer><Contact /></RouteWithContainer>} />
        <Route path="/company" element={<RouteWithContainer><Company /></RouteWithContainer>} />
        <Route path="/new_project" element={<RouteWithContainer><NewProject /></RouteWithContainer>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
