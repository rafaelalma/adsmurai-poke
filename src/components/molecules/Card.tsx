import { ReactElement } from "react";
import { Link } from "react-router-dom";
import stringUtils from "utils/stringUtils";

import "./Card.scss";

export type CardProps = {
  id: string;
  name: string;
};

export default function Card({ id, name }: CardProps): ReactElement {
  return (
    <li className="card">
      <Link className="card__link" to={name}>
        <span className="card__id">{`#${id}`}</span>{" "}
        {stringUtils.capitalize(name)}
      </Link>
    </li>
  );
}
