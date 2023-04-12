import React, { useState } from 'react';
import { Artist } from '../../types';

interface SearchArtistProps { 
  artists: Artist[];
  onArtistSearch: (searchedArtists: Artist[]) => Artist[];
  onArtistSelect: (artist: Artist) => Artist[];
}

const SearchArtists: React.FC<SearchArtistProps> = ({ artists, onArtistSearch, onArtistSelect }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const handleSearch = async () => {
    if (!searchQuery) return;

    const response = await fetch(`http://localhost:3001/artist/search?q=${searchQuery}`);
    const result = await response.json();
    onArtistSearch(result.artists.items);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleArtistSelect = (artist: Artist) => {
    onArtistSelect(artist);
  };

  return (
    <div className="artist-search">
      <h2>Search for Artists</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for an artist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="artist-list">
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
            <tr onClick={() => handleArtistSelect(artist)}>
              <td><img src={artist.images[2]?.url} alt={artist.name} className="img-thumbnail"/></td>
              <td><span>{artist.name}</span></td>
            </tr>
            ))}
          </tbody>
        </table>
      
      </ul>
    </div>
  );
};

export default SearchArtists;
