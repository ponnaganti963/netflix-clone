const API_KEY ="8025d43ba53062b3d9dcdc80e7f1c2d4";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}
export default requests;
