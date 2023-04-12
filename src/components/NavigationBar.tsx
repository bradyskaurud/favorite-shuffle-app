import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
    <ul>
    <li>
        <Link to="/">Create</Link>
        </li>
        <li>
        <Link to="/authentication">Connect</Link>
        </li>
    </ul>
    </nav>
  );
};

export default NavigationBar;
