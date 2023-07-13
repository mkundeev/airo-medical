import { create } from "zustand";
import { TDelete } from "../types/types";

const useDeleteStore = create<TDelete>((set, get) => ({
  selected: [],

  toggleSelected: (id: number) => {
    const selectedIds = get().selected;
    if (selectedIds.includes(id)) {
      set((state) => ({
        selected: state.selected.filter((item) => item !== id),
      }));
    } else {
      set((state) => ({
        selected: state.selected.concat(id),
      }));
    }
  },
  resetSelected: () => {
    set(() => ({ selected: [] }));
  },
}));

export default useDeleteStore;
