import React from "react";
import "./HeroSection.scss";
import "../App.scss";
import { Button } from "./Button";
import natureVideo from "../video/Nature.mp4";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div className="hero__container">
      <video src={natureVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero__buttons">
        <Button
          buttonStyle="btn__outline"
          className="btns"
          buttonSize="btn__large"
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle="btn__primary"
          className="btns"
          buttonSize="btn__large"
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
