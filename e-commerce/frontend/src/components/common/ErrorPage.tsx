import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col justify-center items-center gap-5"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-500 text-2xl font-bold">
          {error?.statusText || error?.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
