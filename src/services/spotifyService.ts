const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET';
const redirectUri = 'YOUR_REDIRECT_URI';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';
const apiBaseUrl = 'https://api.spotify.com/v1';

const responseType = 'code';
const scope = encodeURIComponent('playlist-modify-public playlist-modify-private user-read-private');

export const getAuthUrl = () => {
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=${responseType}`;
};

export const requestAccessToken = async (code: string) => {
  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('code', code);
  body.append('redirect_uri', redirectUri);
  body.append('client_id', clientId);
  body.append('client_secret', clientSecret);

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  return response.json();
};

export const searchArtists = async (query: string, accessToken: string) => {
  const url = `${apiBaseUrl}/search?q=${encodeURIComponent(query)}&type=artist`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const getArtistTopTracks = async (artistId: string, accessToken: string) => {
  const url = `${apiBaseUrl}/artists/${artistId}/top-tracks?market=US`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const getArtistAlbums = async (artistId: string, accessToken: string) => {
  const url = `${apiBaseUrl}/artists/${artistId}/albums?market=US&include_groups=album,single,appears_on,compilation`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const getAlbumTracks = async (albumId: string, accessToken: string) => {
  const url = `${apiBaseUrl}/albums/${albumId}/tracks?market=US`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const createPlaylist = async (userId: string, name: string, description: string, accessToken: string) => {
  const url = `${apiBaseUrl}/users/${userId}/playlists`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description }),
  });

  return response.json();
};

export const addTracksToPlaylist = async (playlistId: string, trackUris: string[], accessToken: string) => {
  const url = `${apiBaseUrl}/playlists/${playlistId}/tracks`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uris: trackUris }),
  });

  return response.json();
};
