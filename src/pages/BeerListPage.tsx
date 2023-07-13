import { useEffect } from "react";
import useBeerStore from "../store/beerStore";
import RecipesList from "../components/RecipesList/RecipesList";

export default function BeerListPage() {
  const { addRecipes, recipes } = useBeerStore();

  useEffect(() => {
    const fetchData = async () => {
      await addRecipes();
    };
    fetchData();
  }, [addRecipes]);

  return <>{recipes.length !== 0 && <RecipesList recipes={recipes} />}</>;
}
