import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeContext } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Theme } from "@/util/enums";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      if (storedTheme === "dark") {
        setTheme(Theme.DARK);
      } else {
        setTheme(Theme.LIGHT);
      }
      return;
    }
    // const darkMq = window.matchMedia("(prefers-color-scheme: dark)");
    // if (darkMq.matches) {
    //   setTheme(Theme.DARK);
    // }
  }, []);

  return (
    <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ setTheme: setTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
