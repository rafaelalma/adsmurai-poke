import { ReactElement } from "react";
import { Link } from "react-router-dom";
import stringUtils from "utils/stringUtils";

import "./Card.scss";

export type CardProps = {
  name: string;
};

export default function Card({ name }: CardProps): ReactElement {
  return (
    <li className="card">
      <Link className="card__link" to={name}>
        {stringUtils.capitalize(name)}
      </Link>
    </li>
  );
}
