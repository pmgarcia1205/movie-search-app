interface ShortMovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ShortOMDBSearchResponse {
  Search: ShortMovieData[];
  totalResults: string;
  Response: string;
}
