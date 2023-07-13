import { TRecipe } from "../../types/types";
import RecipeItem from "../RecipeItem/RecipeItem";
import * as Styled from "./RecipesList.styled";

interface IProps {
  recipes: TRecipe[];
}
export default function RecipesList({ recipes }: IProps) {
  return (
    <Styled.RecipesList>
      {recipes.slice(0, 15).map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </Styled.RecipesList>
  );
}
