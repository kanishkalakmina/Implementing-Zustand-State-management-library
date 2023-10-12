import create, { SetState } from "zustand";

// Define the state type
interface StoreState {
  data: string[];
  addData: (item: string) => void;
}

// Create and export the store
const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  data: [],
  addData: (item: string) => set((state) => ({ data: [...state.data, item] })),
}));

export default useStore;
