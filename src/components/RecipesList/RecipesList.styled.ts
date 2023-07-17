import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

export const RecipesList = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

export const Loader = styled(LinearProgress)`
  color: white;
  margin-top: 50px;
`;
