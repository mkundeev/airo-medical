import { InView } from "react-intersection-observer";
import useBeerStore from "../../store/beerStore";
import RecipeItem from "../RecipeItem/RecipeItem";

import * as Styled from "./RecipesList.styled";
import { Navigate } from "react-router-dom";

export default function RecipesList() {
  const { recipes, infinityScroll, error, isLoading } = useBeerStore();

  return (
    <>
      {error && <Navigate to="/error" />}
      <Styled.RecipesList>
        {recipes.length !== 0 &&
          recipes
            .slice(0, 15)
            .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)}
      </Styled.RecipesList>
      {isLoading && <Styled.Loader />}
      <InView
        as="div"
        style={{ marginTop: "100px" }}
        onChange={(inView) => {
          if (inView) infinityScroll();
        }}
      ></InView>
    </>
  );
}
