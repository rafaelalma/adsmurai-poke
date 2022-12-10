import { ReactElement } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(): ReactElement {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="app-wrapper">
      <div className="page-wrapper page-wrapper--error">
        <h1 className="title">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {error instanceof Error ? (
          <p>
            <strong>{error.message}</strong>
          </p>
        ) : null}
      </div>
    </div>
  );
}
