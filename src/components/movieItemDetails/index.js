import React, { Component } from "react";
import MovieHeader from "../movieHeader";
import "./index.css";

class MovieItemDetails extends Component {
  componentDidMount() {
    this.getMovieItemDetails();
  }

  getMovieItemDetails = () => {};

  render() {
    return (
      <div>
        <MovieHeader />
      </div>
    );
  }
}

export default MovieItemDetails;
