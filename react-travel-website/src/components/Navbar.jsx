import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Button } from "./Button";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            TRAVEL
          </Link>
          <div className="navbar__humburger" onClick={() => setClick(!click)}>
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="navbar__close" />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <ul className={click ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <Link to="/" className="navbar__links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/services"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/products"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                PRODUCTS
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/sign-up"
                className="navbar__links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN-UP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn__outline">SIGN-UP</Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
