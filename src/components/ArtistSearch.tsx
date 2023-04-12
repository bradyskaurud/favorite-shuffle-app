import React, { useState } from 'react';
import { searchArtists } from '../services/spotifyService';

interface ArtistSearchProps {
  accessToken: string;
  onSelectArtist: (artistId: string) => void;
}

const ArtistSearch: React.FC<ArtistSearchProps> = ({ accessToken, onSelectArtist }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [artists, setArtists] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!searchQuery) return;

    const response = await searchArtists(searchQuery, accessToken);
    setArtists(response.artists.items);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
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
        {artists.map((artist) => (
          <li key={artist.id} onClick={() => onSelectArtist(artist.id)}>
            <img src={artist.images[2]?.url} alt={artist.name} />
            <span>{artist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistSearch;
