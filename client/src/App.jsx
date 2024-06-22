import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GetInvolved from './components/GetInvolved';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h3>Universal Human Rights of freedom from inhumane suffering Society</h3>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/getinvolved">Get Involved</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
          </Routes>
        </main>
        <footer>
          <p className="read-the-docs">
            Learn more about our mission and how you can contribute by reading our <a href="#">documentation</a>.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
