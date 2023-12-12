import { useRouteError } from "react-router-dom";
import React from "react";
import Wrapper from "@components/Layout/Wrapper";


const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center align-middle h-full">
        <h1>Ουυπς!</h1>
        <p>Λυπούμαστε, προέκυψε ένα απροσδόκητο σφάλμα</p>
        <p>
          {error?.statusText || error?.message ? (
            <i>{error.statusText || error.message}</i>
          ) : (
            <i>Η σελίδα δεν βρέθηκε 😭</i>
          )}
        </p>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
