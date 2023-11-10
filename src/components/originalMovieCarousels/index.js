import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../movieCarouselCard";

import "./index.css";

const OriginalReactSlick = (props) => {
  const { originalMoviesData } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {originalMoviesData.map((eachMovie) => (
          <CarouselCard eachMovie={eachMovie} key={eachMovie.movieId} />
        ))}
      </Slider>
    </div>
  );
};

export default OriginalReactSlick;
