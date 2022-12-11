import { ReactElement } from "react";
import pokeball from "images/pokeball.png";

import "./HomePage.scss";
import MainTemplate from "components/templates/MainTemplate";

export default function HomePage(): ReactElement {
  return (
    <MainTemplate wrapperClassName="home-page-wrapper" title="Home">
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
    </MainTemplate>
  );
}
