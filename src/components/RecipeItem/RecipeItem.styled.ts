import { styled } from "@mui/material/styles";

interface ICardProps {
  active: boolean;
}

export const RecipeCard = styled("div")<ICardProps>`
  height: calc(100vh - 40px);
  padding: 10px;
  background-color: ${({ theme, active }) =>
    active ? theme.palette.grey[400] : theme.palette.background.paper};
  border-radius: 8px;
  cursor: pointer;
  :hover {
    scale: 1.01;
    transition: scale 300ms linear;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;
`;

export const Image = styled("img")`
  height: 40%;
  align-self: center;
`;

export const DescriptionTitel = styled("p")`
  font-weight: 700;
`;

export const Description = styled("div")`
  overflow-y: auto;
`;
