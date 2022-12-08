import { ReactElement } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage(): ReactElement {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="page-wrapper">
      <h1 className="title">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) ? (
        <p>
          <i>{error.statusText || error.error?.message}</i>
        </p>
      ) : null}
    </div>
  );
}
