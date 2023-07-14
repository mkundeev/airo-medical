import React from "react";
import useBeerStore from "../store/beerStore";
import { Navigate } from "react-router-dom";
import * as Styled from "./styles/ErrorPage.styles";

export default function ErrorPage() {
  const { error } = useBeerStore();
  return (
    <Styled.Card>
      <p>{error}</p>
      {!error && <Navigate to="/" />}
    </Styled.Card>
  );
}
