import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li>
            <Link to="/authentication">Authentication</Link>
          </li>
          <li>
            <Link to="/artist-search">Artist Search</Link>
          </li>
          <li>
            <Link to="/playlist-config">Playlist Config</Link>
          </li>
          <li>
            <Link to="/playlist-generation">Playlist Generation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
