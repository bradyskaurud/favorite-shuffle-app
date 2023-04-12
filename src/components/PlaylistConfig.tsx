import React, { useState } from 'react';

interface PlaylistConfigProps {
  onSubmit: (config: { numSongs: number; popularSongsOnly: boolean }) => void;
}

const PlaylistConfig: React.FC<PlaylistConfigProps> = ({ onSubmit }) => {
  const [numSongs, setNumSongs] = useState<number>(10);
  const [popularSongsOnly, setPopularSongsOnly] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ numSongs, popularSongsOnly });
  };

  return (
    <div className="playlist-config">
      <h2>Configure Your Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numSongs">Number of songs (max 100):</label>
          <input
            type="number"
            id="numSongs"
            name="numSongs"
            min="1"
            max="100"
            value={numSongs}
            onChange={(e) => setNumSongs(parseInt(e.target.value))}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="popularSongsOnly"
            name="popularSongsOnly"
            checked={popularSongsOnly}
            onChange={(e) => setPopularSongsOnly(e.target.checked)}
          />
          <label htmlFor="popularSongsOnly">Include popular songs only</label>
        </div>
        <button type="submit">Generate Playlist</button>
      </form>
    </div>
  );
};

export default PlaylistConfig;
