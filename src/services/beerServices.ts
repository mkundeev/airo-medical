import axios from "axios";
import { TRecipe } from "../types/types";

const URL = "https://api.punkapi.com/v2/beers";

export const getRecipes = async (page: number) =>
  axios.get<TRecipe[]>(URL, {
    params: {
      page: String(page),
    },
  });
