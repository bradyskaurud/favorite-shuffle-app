import React, { useState } from 'react';

const CreatePlaylist = () => {
    const [numSongs, setNumSongs] = useState<number>(10);
    const [popularSongsOnly, setPopularSongsOnly] = useState<boolean>(true);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: make request to our API to create the playlist
    };

    return (
        <div className='create-playlist'>
          <h2>Create Playlist</h2>
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
                type="radio"
                id="popularSongsOnly"
                name="songOptions"
                checked={popularSongsOnly}
                onChange={(e) => setPopularSongsOnly(e.target.checked)}
              />
              <label htmlFor="popularSongsOnly">Only include popular songs</label>
            </div>

            <div>
              <input
                type="radio"
                id="randomizeAllSongs"
                name="songOptions"
                checked={!popularSongsOnly}
                onChange={(e) => setPopularSongsOnly(!e.target.checked)}
              />
              <label htmlFor="randomizeAllSongs">Randomize all songs from artists</label>
            </div>

            <button type="submit">Generate Playlist</button>
          </form>
        </div>
    );
}

export default CreatePlaylist;