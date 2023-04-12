import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Authentication from '../components/Authentication';
import ArtistSearch from '../components/ArtistSearch';
import PlaylistConfig from '../components/PlaylistConfig';
import PlaylistGeneration from '../components/PlaylistGeneration';

import { getAuthUrl } from '../services/spotifyService';

const AppNavigator: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication onAuthenticate={function (): void {
                  getAuthUrl();
              } } />} />
        <Route path="/artist-search" element={<ArtistSearch accessToken={''} onSelectArtist={function (artistId: string): void {
                  alert(artistId);
              } } />} />
        <Route path="/playlist-config" element={<PlaylistConfig onSubmit={function (config: { numSongs: number; popularSongsOnly: boolean; }): void {
                  alert(JSON.stringify(config));
              } } />} />
        <Route path="/playlist-generation" element={<PlaylistGeneration />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
