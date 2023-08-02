import { create } from "zustand";

const useStore = create((set) => ({
  trips: [
    {
      id: 0,
      duration: "",
      destination: "",
      tasks: [
        {
          name: "",
          description: "",
          nft: "",
          reward: "",
        },
      ],
    },
  ],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
