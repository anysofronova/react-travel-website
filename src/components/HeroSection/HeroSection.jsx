import React from "react";
import "./HeroSection.scss";
import "../../App.css";
import { Button } from "../ui/Button/Button";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div className="hero__container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero__buttons">
        <Button
          buttonStyle="btn__outline"
          className="btn"
          buttonSize="btn__large"
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle="btn__primary"
          className="btn"
          buttonSize="btn__large"
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
