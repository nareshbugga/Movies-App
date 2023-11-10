import { Component } from "react";
import MovieHeader from "../movieHeader";
import "./index.css";

class MovieItemDetails extends Component {
  componentDidMount() {
    this.getMovieItemDetails();
  }

  getMovieItemDetails = () => {
    const { match } = this.props;
    const { params } = match;
    const { movieId } = params;
    console.log("Movie ID:", movieId);
  };

  render() {
    return (
      <div>
        <MovieHeader />
      </div>
    );
  }
}

export default MovieItemDetails;
