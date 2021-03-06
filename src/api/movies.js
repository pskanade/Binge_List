import { BASEAPI } from "../../global.config";
import { APIKEY } from "../../apiKey.tmdb";
import { fetchData } from "./generic";

// Here will only assemble the URL addresses to get the desired data

export const getMoviesNowPlaying = async (pageNum, storeMoviesNowPlaying) => {
  const APIENDPOINT = "/movie/now_playing";
  const queryString = `?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeMoviesNowPlaying(data.results, data.total_pages);
  } catch (err) {
    console.log("An error has occured when fetching movies now playing");
  }
};

export const getPopularMovies = async (pageNum, storePopularMovies) => {
  const APIENDPOINT = "/movie/popular";
  const queryString = `?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const data = await fetchData(URL);
    storePopularMovies(data.results, data.total_pages);
  } catch (err) {
    console.log("An error has occured when fetching movies now playing");
  }
};

export const getTopRatedMovies = async (pageNum, storeMovies) => {
  const APIENDPOINT = "/movie/top_rated";
  const queryString = `?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeMovies(data.results, data.total_pages);
  } catch (err) {
    console.log("An error has occured when fetching movies top rated");
  }
};

export const getUpcomingMovies = async (pageNum, storeMovies) => {
  const APIENDPOINT = "/movie/upcoming";
  const queryString = `?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeMovies(data.results, data.total_pages);
  } catch (err) {
    console.log("An error has occured when fetching movies upcoming");
  }
};

export const getLatestMovies = async (pageNum, storeMovies) => {
  const APIENDPOINT = "/movie/latest";
  const queryString = `?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeMovies(data.results, data.total_pages);
  } catch (err) {
    console.log("An error has occured when fetching movies latest");
  }
};

export const getDetailedMovie = async (movieId, storeMovieDetails) => {
  const apiEndpoint = `/movie/${movieId}`;
  const queryString = `?api_key=${APIKEY}&language=en-US`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeMovieDetails(data);
  } catch (err) {
    console.log("An error has occured when fetching movie details");
  }
};

export const getMovieCredits = async (movieId, storeMovieCast) => {
  const apiEndpoint = `/movie/${movieId}/credits`;
  const queryString = `?api_key=${APIKEY}`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    const data = await fetchData(URL);
    if (data.cast) {
      storeMovieCast(data.cast);
    }
  } catch (err) {
    console.log("An error has occured when fetching movie credits");
  }
};
