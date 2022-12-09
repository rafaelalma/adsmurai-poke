import { ReactElement } from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./App.scss";

export default function App(): ReactElement {
  return (
    <div className="app-wrapper">
      <header className="header">
        <nav>
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "header__link header__link--active"
                    : isPending
                    ? "header__link header__link--pending"
                    : "header__link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "header__link header__link--active"
                    : isPending
                    ? "header__link header__link--pending"
                    : "header__link"
                }
                to="pokedex"
              >
                Pokedex
              </NavLink>
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
