import "@mui/material/styles";
import {
  PaletteColor,
  PaletteColorOptions,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    textColor: PaletteColor;
    bgColor: PaletteColor;
  }

  interface PaletteOptions {
    textColor: PaletteColorOptions;
    bgColor: PaletteColorOptions;
  }
}

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#ef8351",
    },
    secondary: {
      main: "#ffe7ee",
    },
    textColor: { main: "#57534e" },
    bgColor: { main: "#fbf7f0" },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&:not(.Mui-selected):not(:hover)": {
            color: "#57534e", // Change the color of the inactive tab
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ef5181",
    },
    secondary: {
      main: "#ffe7ee",
    },
    textColor: { main: "#57534e" },
    bgColor: { main: "#fbf7f0" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
