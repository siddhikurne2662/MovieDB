export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  vote_average: number;
  release_date: string;
  genres?: string[]; // For processed data
  genre_ids: number[];
  overview: string;
}

interface GenreMap {
  [key: number]: string;
}

// Add this before your component
const GENRE_MAP: GenreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};