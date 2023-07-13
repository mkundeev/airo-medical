import { create } from "zustand";
import { TStore } from "../types/types";
import { getRecipes } from "../services/beerServices";

const useBeerStore = create<TStore>((set, get) => ({
  recipes: [],
  page: 1,
  addRecipes: async () => {
    const page = get().page;
    const { data } = await getRecipes(page);
    if (data) {
      set(() => ({ recipes: data }));
    }
  },
  removeRecipes: (arrayIds: number[]) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => !arrayIds.includes(recipe.id)),
    }));
    const recipes = get().recipes;
    if (recipes.length === 0) {
      set((state) => ({ page: state.page + 1 }));
      get().addRecipes();
    }
  },
}));

export default useBeerStore;
