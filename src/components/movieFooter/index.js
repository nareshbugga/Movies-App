import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import { BsGoogle, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const MovieFooter = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-logo-container">
        <BsGoogle size={28} color={"#ffffff"} style={{ margin: "0px 20px" }} />
        <BsTwitter size={28} color={"#ffffff"} style={{ margin: "0px 20px" }} />
        <BsInstagram
          size={28}
          color={"#ffffff"}
          style={{ margin: "0px 20px" }}
        />
        <BsYoutube size={28} color={"#ffffff"} style={{ margin: "0px 20px" }} />
      </div>
      <p className="contact-us">Contact Us</p>
    </div>
  );
};

export default MovieFooter;
