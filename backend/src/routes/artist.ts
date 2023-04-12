import express from 'express';
import axios from 'axios';

const router = express.Router();

const apiBaseUrl = 'https://api.spotify.com/v1';

const searchArtists = async (req: { query: any; }, res: any) => {
  try {
    const url = `${apiBaseUrl}/search?q=${encodeURIComponent(req.query.q)}&type=artist`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.json('Error getting artists');
  }
};

const getArtistTopTracks = async (artistId: string) => {
    const url = `${apiBaseUrl}/artists/${artistId}/top-tracks?market=US`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
  
    return response.json();
  };
  
const getArtistAlbums = async (artistId: string) => {
    const url = `${apiBaseUrl}/artists/${artistId}/albums?market=US&include_groups=album,single,appears_on,compilation`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
  
    return response.json();
  };


router.get('/search', searchArtists);
router.get('/top-tracks', getArtistTopTracks);
router.get('/albums', getArtistAlbums);

export { router };
