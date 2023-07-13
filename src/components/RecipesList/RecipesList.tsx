import { useEffect } from "react";
import useBeerStore from "../../store/beerStore";

import RecipeItem from "../RecipeItem/RecipeItem";
import * as Styled from "./RecipesList.styled";

export default function RecipesList() {
  const { addRecipes, recipes } = useBeerStore();

  useEffect(() => {
    const fetchData = async () => {
      await addRecipes();
    };
    fetchData();
  }, [addRecipes]);
  return (
    <Styled.RecipesList>
      {recipes.length !== 0 &&
        recipes
          .slice(0, 15)
          .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)}
    </Styled.RecipesList>
  );
}
