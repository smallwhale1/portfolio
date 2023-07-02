import { Sections } from "@/util/enums";
import { createContext } from "react";

type InViewContextType = {
  activeView: Sections;
  setActiveView: (section: Sections) => void;
};

export const InViewContext = createContext<InViewContextType>({
  activeView: Sections.HOME,
  setActiveView: () => {},
});
