import React, { useState } from 'react';
import { Artist } from '../../types';

interface SelectedArtistsProps { 
  selectedArtists: Artist[]; 
}

const SelectedArtists: React.FC<SelectedArtistsProps> = ({ selectedArtists }) => {
    return (
        <div className='selected-artists'>
          <h2>Selected Artists</h2>
          {selectedArtists.map((selectedArtist) => (
            <li key={selectedArtist.id}>
              <img src={selectedArtist.images[2]?.url} alt={selectedArtist.name} />
              <span>{selectedArtist.name}</span>
            </li>
          ))}
        </div>
    );
};

export default SelectedArtists;