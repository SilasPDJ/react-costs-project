import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/pages/layout/Container';

function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/company">Company</Link>
                <Link to="/new_project">new_project</Link>
            </div>
            <Routes>
                <Route path="/" element={<Container><Home /></Container>} />
                <Route path="/contact" element={<Container><Contact /></Container>} />
                <Route path="/company" element={<Container><Company /></Container>} />
                <Route path="/new_project" element={<Container><NewProject /></Container>} />
            </Routes>
        </Router>
    );
}

export default App;