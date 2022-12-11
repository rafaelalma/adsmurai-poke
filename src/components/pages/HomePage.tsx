import { ReactElement } from "react";
import pokeball from "images/pokeball.png";

import "./HomePage.scss";

export default function HomePage(): ReactElement {
  return (
    <div className="home-page-wrapper">
      <h1 className="title">Home</h1>
      <img className="home-image" src={pokeball} alt="pokeball" />
      <a
        className="home-link"
        href="https://www.flaticon.com/free-icons/pokemon"
        title="pokemon icons"
        target="_blank"
        rel="noreferrer"
      >
        Pokemon icons created by Nikita Golubev - Flaticon
      </a>
    </div>
  );
}
