import React from "react";
import { Outlet } from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";
import * as Styled from "./CommonLayOut.styled";

export default function CommonLayOut() {
  return (
    <Styled.Background>
      <Styled.LayOutContainer>
        <Outlet />
        <DeleteButton />
      </Styled.LayOutContainer>
    </Styled.Background>
  );
}
