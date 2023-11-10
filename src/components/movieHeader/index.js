import { BiSearch } from "react-icons/bi";
import "./index.css";

const MovieHeader = () => {
  return (
    <nav className="nav-container">
      <div className="movie-logo-container">
        <div>
          <img
            src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1694761995/Movie_logo_p34sct.svg"
            alt="Movie Logo"
            className="movie-logo"
          />
        </div>
        <div>
          <ul className="ul-nav-links">
            <li>Home</li>
            <li>Popular</li>
          </ul>
        </div>
      </div>
      <div className="account-container">
        <BiSearch size={25} color={"#ffffff"} />
        <div>
          <img
            src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1699538947/Avatar_lm8l2t.svg"
            alt="Account Logo"
            className="account-image"
          />
        </div>
      </div>
    </nav>
  );
};

export default MovieHeader;
