/* eslint-disable */

import React, { FC, createContext, useState, useCallback } from "react";

const themeKeys = ["light", "dark"] as const;
const themeProperties = ["foreground", "background"] as const;

const themeStyles: {
  [key in typeof themeKeys[number]]: {
    [property in typeof themeProperties[number]]: string;
  };
} = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

type IThemeContext = {
  key: typeof themeKeys[number];
  styles: { [key in typeof themeProperties[number]]: string };
  toggle: () => void;
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: FC = ({ children }) => {
  const [key, setKey] = useState<typeof themeKeys[number]>("light");
  const styles = themeStyles[key];

  const toggle = useCallback(() => {
    const newKey = themeKeys.find((themeKey) => themeKey !== key);
    if (newKey) setKey(newKey);
  }, [key]);

  return (
    <ThemeContext.Provider value={{ key, styles, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
