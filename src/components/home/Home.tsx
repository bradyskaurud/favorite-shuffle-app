import NavigationBar from '../NavigationBar';

import PlatformSelection from './PlatformSelection';
import SearchArtists from './SearchArtists';
import CreatePlaylist from './CreatePlaylist';
import SelectedArtists from './SelectedArtists';
import { useState } from 'react';
import { Artist } from '../../types';

const Home = () => {
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  const onArtistSearch = (searchedArtists: Artist[]): Artist[] => {
    const newArtists = [ ...searchedArtists ];
    setArtists(newArtists);
    return newArtists;
  };

  const onArtistSelect = (artist: Artist): Artist[] => {
    const newSelectedArtists = [...selectedArtists, artist]; 
    setSelectedArtists(newSelectedArtists);
    return newSelectedArtists;
  };

  return (
    <div>
      <h1>Favorite Shuffle</h1>
      <NavigationBar />

      <div className='container'>
        {/* <PlatformSelection /> */}
        <SearchArtists artists={artists} onArtistSearch={onArtistSearch} onArtistSelect={onArtistSelect} />
        <SelectedArtists selectedArtists={selectedArtists}/>
        <CreatePlaylist />
      </div>

      <div>DEBUG</div>
      <div>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default Home;
