import { create } from "zustand";

type LoaderStoreStateType = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void
}

const useLoaderStore = create<LoaderStoreStateType>((set, get) => ({
    isLoading: false,
    setIsLoading: value => set({ isLoading: value })
}))

export { useLoaderStore }