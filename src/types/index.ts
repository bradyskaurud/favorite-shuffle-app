export interface Image {
    height: number;
    width: number;
    url: string;
  }
  
  export interface Artist {
    id: string;
    name: string;
    genres: string[];
    images: Image[];
    popularity: number;
    uri: string;
  }
  
  export interface Song {
    id: string;
    name: string;
    artists: Artist[];
    album: Album;
    popularity: number;
    uri: string;
  }
  
  export interface Album {
    id: string;
    name: string;
    artists: Artist[];
    images: Image[];
    release_date: string;
    total_tracks: number;
    uri: string;
  }
  
  export interface Playlist {
    id: string;
    name: string;
    description: string;
    owner: User;
    images: Image[];
    tracks: {
      href: string;
      items: {
        track: Song;
      }[];
      total: number;
    };
    uri: string;
  }
  
  export interface User {
    id: string;
    display_name: string;
    email: string;
    images: Image[];
    uri: string;
  }
  