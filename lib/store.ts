import create from "zustand";

interface StoreState {
  data: string[];
  selectedData: {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  addData: (item: string) => void;
  setSelectedData: (data: StoreState["selectedData"]) => void;
}

const useStore = create<StoreState>((set) => ({
  data: [],
  selectedData: {
    name: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  addData: (item: string) => set((state) => ({ data: [...state.data, item] })),
  setSelectedData: (data) => set({ selectedData: data }),
}));

export default useStore;
