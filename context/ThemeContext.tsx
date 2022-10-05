import React, { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";

export type Theme = "dark" | "light";
type ThemeContextValue = {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

type Props = {
  children: JSX.Element;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  useEffect(() => {
    setTheme(document.body.dataset.theme as Theme);
  }, []);

  const storeTheme = useCallback(() => {
    setTheme((oldTheme) => {
      const newTheme = oldTheme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme);
      document.body.dataset.theme = newTheme;
      return newTheme;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme: storeTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const { theme, setTheme } = context;

  return {
    theme,
    setTheme,
  };
}
