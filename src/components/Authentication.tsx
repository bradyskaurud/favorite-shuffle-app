import React from 'react';

interface AuthenticationProps {
  onAuthenticate: () => void;
}

const Authentication: React.FC<AuthenticationProps> = ({ onAuthenticate }) => {
  return (
    <div className="authentication">
      <p>Please log in with your Spotify account to continue.</p>
      <button onClick={onAuthenticate}>Log in with Spotify</button>
    </div>
  );
};

export default Authentication;
