import { create } from "zustand";
import { devtools } from "zustand/middleware";
import LastMatch from "../_components/LastMatch";
import Players from "../_components/Players";
import NewMatch from "../_components/NewMatch";

export interface IWindow {
  id: string;
  className?: string;
  component?: () => JSX.Element;
}

// define types for state values and actions separately
export type State = {
  windows: IWindow[];
  currentState: "Open" | "Closed";
  activeWindowId: string;
};

export type Actions = {
  setFullSize: (windowId: string) => void;
  setMinimize: () => void;
};

export const initialWindows = [
  {
    id: "LastMatch",
    component: LastMatch as () => JSX.Element,
    className:
      "col-span-8 row-span-4 flex flex-row justify-between rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4",
  },
  {
    id: "MVP",
    className:
      "col-span-4 row-span-4 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all",
  },
  {
    id: "NewMatch",
    component: NewMatch as () => JSX.Element,
  },
  {
    id: "CurrentMatch",

    className:
      "col-span-8 row-span-4 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all",
  },
  {
    id: "Players",
    component: Players as () => JSX.Element,
  },
  {
    id: "CountMatches",
    className:
      "col-span-3 row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4",
  },
];

// define the initial state
const initialState: State = {
  windows: initialWindows,
  currentState: "Closed",
  activeWindowId: "",
};

// create store
const useDashboard = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setFullSize: (windowId: string) =>
      set((state: State) => ({
        ...state,
        windows: state.windows.filter((w) => w.id === windowId),
        currentState: "Open",
        activeWindowId: windowId,
      })),
    setMinimize: () => {
      set((state: State) => ({
        ...state,
        windows: initialWindows,
        activeWindowId: "",
        currentState: "Closed",
      }));
    },
  })),
);

export default useDashboard;
