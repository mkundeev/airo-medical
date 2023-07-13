import { Outlet } from "react-router-dom";
import * as Styled from "./CommonLayOut.styled";

export default function CommonLayOut() {
  return (
    <Styled.Background>
      <Styled.LayOutContainer>
        <Outlet />
      </Styled.LayOutContainer>
    </Styled.Background>
  );
}
