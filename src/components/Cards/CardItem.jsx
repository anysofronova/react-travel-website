import React from "react";
import { Link } from "react-router-dom";

function CardItem({path, label, src, text}) {
  return (
    <li className="cards__item">
      <Link className="cards__item-link" to={path}>
        <figure className="cards__item-picWrap" data-category={label}>
          <img className="cards__item-img" alt="Travel" src={src} />
        </figure>
        <div className="cards__item-info">
          <h5 className="cards__item-text">{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
