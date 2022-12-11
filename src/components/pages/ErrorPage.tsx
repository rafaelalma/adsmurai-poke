import MainTemplate from "components/templates/MainTemplate";
import { ReactElement } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage(): ReactElement {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="app-wrapper">
      <MainTemplate
        wrapperClassName="page-wrapper page-wrapper--error"
        title="Oops!"
      >
        <p>Sorry, an unexpected error has occurred.</p>
        {error instanceof Error ? (
          <p>
            <strong>{error.message}</strong>
          </p>
        ) : isRouteErrorResponse(error) ? (
          <p>
            <strong>{error.statusText}</strong>
          </p>
        ) : null}
      </MainTemplate>
    </div>
  );
}
