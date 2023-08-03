import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import RouteWithContainer from './RoutWithContainer';
import Container from './Container';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="costs"></img>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Company</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}