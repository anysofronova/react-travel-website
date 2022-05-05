import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button/Button";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer__container">
      <section className="footer__subscription">
        <p className="footer__subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer__subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="footer__input-areas">
          <form>
            <input
              className="footer__input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn__outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="footer__links">
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <section className="footer__social-media">
        <div className="footer__social_mediaWrap">
          <div className="footer__logo">
            <Link to="/" className="footer__social-logo">
              TRVL
            </Link>
          </div>
          <small className="website-rights">
            TRVL © {new Date().getFullYear()}
          </small>
          <div className="footer__social-icons">
            <Link
              class="footer__social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              class="footer__social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              class="footer__social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              class="footer__social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              class="footer__social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
