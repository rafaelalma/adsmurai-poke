import { ReactElement } from "react";

import "./TypeChip.scss";

type TypeChipProps = {
  type: string;
};

export default function TypeChip({ type }: TypeChipProps): ReactElement {
  return <li className={`type-chip type-chip--${type}`}>{type}</li>;
}
