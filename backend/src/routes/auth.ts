import express from 'express';
import axios from 'axios';

const clientId = process.env.SPOTIFY_CLIENT_ID as string | number | boolean;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string | number | boolean;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI as string | number | boolean;

const router = express.Router();

const authEndpoint = 'https://accounts.spotify.com/authorize';
const apiBaseUrl = 'https://api.spotify.com/v1';

const responseType = 'code';
const scope = encodeURIComponent('playlist-modify-public playlist-modify-private user-read-private');

const getAuthUrl = () => {
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=${responseType}`;
};

router.get('/ping', async (req, res) => {
    res.json('Hello');
});

router.get('/connect', async (req, res) => {
    try {
        const response = await axios.get(getAuthUrl());
        res.json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/callback', async (req, res) => {
  const code = req.body.code;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching access token:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router };
