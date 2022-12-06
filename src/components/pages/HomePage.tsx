import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function HomePage(): ReactElement {
  return (
    <div>
      <h1>Home</h1>
      <Link to="pokedex">Pokedex</Link>
    </div>
  );
}
