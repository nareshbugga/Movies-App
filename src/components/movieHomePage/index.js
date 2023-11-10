import { Component } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import MovieHeader from "../movieHeader";
import MovieFooter from "../movieFooter";

import TrendingReactSlick from "../trendingMovieCarousels";
import OriginalReactSlick from "../originalMovieCarousels";
import "./index.css";

class HomePage extends Component {
  state = {
    originalMoviesData: [],
    trendingMoviesData: [],
    moviePoster: "",
    title: "",
    overview: "",
  };

  componentDidMount() {
    this.originalMoviesDataList();
    this.trendingMoviesDataList();
  }

  originalMoviesDataList = async () => {
    const originalMoviesAPI = "https://apis.ccbp.in/movies-app/originals";
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(originalMoviesAPI, options);
    const data = await response.json();
    const { results } = data;
    if (response.ok === true) {
      const updateDataList = results.map((movieData) => ({
        movieId: movieData.id,
        backgroundImage: movieData.backdrop_path,
        title: movieData.title,
        overview: movieData.overview,
        posterPath: movieData.poster_path,
      }));
      const item =
        updateDataList[Math.floor(Math.random() * updateDataList.length)];
      this.setState({
        originalMoviesData: updateDataList,
        moviePoster: item.posterPath,
        title: item.title,
        overview: item.overview,
      });
    }
  };

  trendingMoviesDataList = async () => {
    const trendingMoviesAPI = "https://apis.ccbp.in/movies-app/trending-movies";
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(trendingMoviesAPI, options);
    const data = await response.json();
    console.log(data);
    const { results } = data;
    if (response.ok === true) {
      const updateDataList = results.map((movieData) => ({
        movieId: movieData.id,
        backgroundImage: movieData.backdrop_path,
        title: movieData.title,
        overview: movieData.overview,
        posterPath: movieData.poster_path,
      }));
      this.setState({
        trendingMoviesData: updateDataList,
      });
    }
  };

  render() {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      <Navigate to="/login" />;
    }
    const {
      moviePoster,
      title,
      overview,
      trendingMoviesData,
      originalMoviesData,
    } = this.state;
    return (
      <div className="home-page-container">
        <div
          style={{
            backgroundImage: `linear-gradient(
      to bottom,
      rgba(19, 19, 19, 0),
      rgba(19, 19, 19, 0.3),
      rgba(19, 19, 19, 0.5),
      rgba(19, 19, 19, 0.8),
      rgba(19, 19, 19, 10)
    ), url(${moviePoster})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <MovieHeader />
          <div className="description-container">
            <h1 className="background-title">{title}</h1>
            <p className="background-overview">{overview}</p>
          </div>
        </div>
        <div className="carousel-container">
          <h1 className="carousel-heading">Trending Now</h1>
          <div>
            <TrendingReactSlick trendingMoviesData={trendingMoviesData} />
          </div>
          <h1 className="carousel-heading">Originals</h1>
          <div>
            <OriginalReactSlick originalMoviesData={originalMoviesData} />
          </div>
        </div>
        <MovieFooter />
      </div>
    );
  }
}

export default HomePage;
