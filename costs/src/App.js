import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/pages/layout/Container';

function RouteWithContainer({ children }) {
  return <Container>{children}</Container>;
}

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/new_project">New Project</Link>
      </div>
      <Routes>
        <Route path="/" element={<RouteWithContainer><Home /></RouteWithContainer>} />
        <Route path="/contact" element={<RouteWithContainer><Contact /></RouteWithContainer>} />
        <Route path="/company" element={<RouteWithContainer><Company /></RouteWithContainer>} />
        <Route path="/new_project" element={<RouteWithContainer><NewProject /></RouteWithContainer>} />
      </Routes>
    </Router>
  );
}

export default App;
