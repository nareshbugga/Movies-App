import { Link } from "react-router-dom";
import "./index.css";

const CarouselCard = (props) => {
  const { eachMovie } = props;
  //   console.log(eachMovie.movieId);
  return (
    <div>
      <Link to={`/movies/${eachMovie.movieId}`}>
        <h3>
          <img
            src={eachMovie.backgroundImage}
            alt="posterPath"
            style={{
              width: "220px",
              height: "150px",
              borderRadius: "5%",
              margin: "0px 20px",
            }}
          />
        </h3>
      </Link>
    </div>
  );
};

export default CarouselCard;
