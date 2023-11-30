import { create } from "zustand";
import { devtools } from "zustand/middleware";

// define types for state values and actions separately
export type State = {
  width: number;
  height: number;
  xPosition: number;
  yPosition: number;
};

type Dimensions = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export type Actions = {
  setDimensions: ({ width, height, x, y }: Dimensions) => void;
};

// define the initial state
const initialState: State = {
  width: 0,
  height: 0,
  xPosition: 0,
  yPosition: 0,
};

// create store
const useDashboardDimensions = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setDimensions: ({ width, height, x, y }: Dimensions) =>
      set((state: State) => ({
        ...state,
        width,
        height,
        xPosition: x,
        yPosition: y,
      })),
  })),
);

export default useDashboardDimensions;
