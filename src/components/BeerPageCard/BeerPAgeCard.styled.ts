import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Card = styled(Paper)`
  padding: 20px;
  display: flex;
  gap: 10px;
  height: calc(100vh - 40px);
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Bold = styled("span")`
  font-weight: 700;
`;
