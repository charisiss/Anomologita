import { useRouteError } from "react-router-dom";
import PageContainer from "../components/Layout/PageContainer";
import React from "react";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <PageContainer>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {error?.statusText || error?.message ? (
            <i>{error.statusText || error.message}</i>
          ) : (
            <i>Page not found!</i>
          )}
        </p>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
