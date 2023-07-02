import { Theme } from "@/util/enums";
import { createContext } from "react";

type ThemeContextType = {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  setTheme: () => {},
});
