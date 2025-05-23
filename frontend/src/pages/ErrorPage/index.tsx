import React from "react";
import { useRouteError } from "react-router-dom";
import { NetworkError } from "./types";

export default function ErrorPage(): React.ReactNode {
  const error = useRouteError() as NetworkError;
  console.error(error);

  return (
    <header>
      <h1>{error.statusText || error.message}</h1>
    </header>
  );
}
