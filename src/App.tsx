import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.scss";

export default function App(): ReactElement {
  return (
    <div className="app-wrapper">
      <header className="header">
        <nav>
          <ul className="header__list">
            <li className="header__list-item">
              <Link className="header__link" to="/">
                Home
              </Link>
            </li>
            <li className="header__list-item">
              <Link className="header__link" to="pokedex">
                Pokedex
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
