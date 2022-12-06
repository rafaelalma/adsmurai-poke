import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";

export default function App(): ReactElement {
  return <Outlet />;
}
