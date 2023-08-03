import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';

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
            <Route exact path="/" Component={Home}/>
            <Route exact path="/contact" Component={Contact}/>
            <Route exact path="/company" Component={Company}/>
            <Route exact path="/new_project" Component={NewProject}/>
        
        </Routes>
    </Router>

  );
}

export default App;
