import { InView } from "react-intersection-observer";
import useBeerStore from "../../store/beerStore";
import RecipeItem from "../RecipeItem/RecipeItem";

import * as Styled from "./RecipesList.styled";

export default function RecipesList() {
  const { recipes, infinityScroll } = useBeerStore();

  return (
    <>
      <Styled.RecipesList>
        {recipes.length !== 0 &&
          recipes
            .slice(0, 15)
            .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)}
      </Styled.RecipesList>
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
