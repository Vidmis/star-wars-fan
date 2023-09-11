import React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage(): React.ReactElement {
  const error: RouteError = useRouteError() as RouteError;
  console.error(error);

  return (
    <ErrorWrapper>
      <ErrorHeader>Oops!</ErrorHeader>
      <ErrorMessage>Sorry, an unexpected error has occurred.</ErrorMessage>
      <ErrorDetail>
        {error.statusText || error.message || "Unknown error occurred."}
      </ErrorDetail>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  max-width: 600px;
  margin: 40px auto;
`;

const ErrorHeader = styled.h1`
  color: red;
`;

const ErrorMessage = styled.p`
  color: #333;
  font-size: 16px;
`;

const ErrorDetail = styled.i`
  color: #666;
`;
