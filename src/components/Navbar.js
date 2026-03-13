import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        DSM
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-links">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-links">Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-links">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/achievements" className="nav-links">Achievements</Link>
        </li>
        <li className="nav-item">
          <Link to="/certificates" className="nav-links">Certificates</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-links">Resume</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;