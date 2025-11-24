import { createContext, type Dispatch, type SetStateAction } from "react";

export const LayoutContext = createContext<{
  showSidePanel?: boolean;
  setShowSidePanel?: Dispatch<SetStateAction<boolean>>;
}>({});
