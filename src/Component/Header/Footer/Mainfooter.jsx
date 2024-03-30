import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faWhatsapp,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Mainfooter = () => {
  return (
    <div className="footer-con">
      <div className="speical-dogs">
        SPECIAL D<span>O</span>G<span>S</span>
      </div>
      <div className="font-icon">
        <a href="https://www.facebook.com/groups/2178104555539405">
          {" "}
          <FontAwesomeIcon icon={faFacebookSquare} className="icons" />
        </a>
        <a href="https://www.instagram.com/explore/tags/dogs/">
          <FontAwesomeIcon icon={faInstagramSquare} className="icons" />
        </a>
        <FontAwesomeIcon icon={faWhatsappSquare} className="icons" />
      </div>
      <div className="name">
        <h5>Made By Trishya Sharma</h5>
      </div>
    </div>
  );
};

export default Mainfooter;
