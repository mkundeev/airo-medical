import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

export const Background = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  min-height: 100vh;
`;
export const LayOutContainer = styled(Container)`
  padding: 20px;
  background-color: transparent;
`;
