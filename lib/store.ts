import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SelectedData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface SelectedDataStore {
  selectedData: SelectedData;
  updateSelectedData: (data: SelectedData) => void;
}

const useSelectedDataStore = create(
  persist(
    (set) => ({
      selectedData: {
        name: "",
        firstName: "",
        lastName: "",
        email: "",
      },
      updateSelectedData: (data: any) => {
        set({ selectedData: data });
      },
    }),
    {
      name: "key",
      getStorage: () => sessionStorage,
    }
  )
);
export default useSelectedDataStore;
