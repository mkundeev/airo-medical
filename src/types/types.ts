export type TStore = {
  recipes: TRecipe[];
  page: number;
  error: string | null;
  isLoading: boolean;
  increasePage: () => void;
  addRecipes: () => Promise<void>;
  deleteFirstFive: () => void;
  infinityScroll: () => void;
  removeRecipes: (arrayIds: number[]) => void;
};

export type TDelete = {
  selected: number[];
  toggleSelected: (id: number) => void;
  resetSelected: () => void;
};

export type TRecipe = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: { value: number; unit: string };
  boil_volume: { value: number; unit: string };
  method: {
    mash_temp: [{ temp: { value: number; unit: string }; duration: 75 }];
    fermentation: { temp: { value: number; unit: string } };
    twist: string | null;
  };
  ingredients: {
    malt: TMalt[];
    hops: THops[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type TMalt = { name: string; amount: { value: number; unit: string } };
type THops = {
  name: string;
  amount: { value: number; unit: string };
  add: string;
  attribute: string;
};
