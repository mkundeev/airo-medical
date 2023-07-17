import { create } from "zustand";
import { TStore } from "../types/types";
import { getRecipes } from "../services/beerServices";
import { AxiosError } from "axios";

const useBeerStore = create<TStore>((set, get) => ({
  recipes: [],
  page: 1,
  error: null,
  isLoading: false,
  increasePage: () => {
    set((state) => ({ page: state.page + 1 }));
  },
  addRecipes: async () => {
    const page = get().page;
    try {
      set(() => ({ isLoading: true }));
      const { data } = await getRecipes(page);
      set((state) => ({ recipes: [...state.recipes, ...data] }));
    } catch (err) {
      const error = err as AxiosError;
      set(() => ({ error: error.message }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  deleteFirstFive: () => {
    set((state) => ({
      recipes: state.recipes.slice(5, state.recipes.length),
    }));
  },
  infinityScroll: () => {
    const recipes = get().recipes;
    if (recipes.length === 0) {
      get().addRecipes();
    } else if (recipes.length <= 15) {
      get().increasePage();
      get().addRecipes();
      get().deleteFirstFive();
    } else if (recipes.length > 15) {
      get().deleteFirstFive();
    }
  },
  removeRecipes: (arrayIds: number[]) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => !arrayIds.includes(recipe.id)),
    }));
    const recipes = get().recipes;
    if (recipes.length === 0) {
      get().increasePage();
      get().addRecipes();
    }
  },
}));

export default useBeerStore;
