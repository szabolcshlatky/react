import React, { createContext, useReducer } from "react";
import { ThemeState, ThemeAction, ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, {
    backgroundColor: "peachpuff",
  });

  const changeTheme = (color: string) => {
    dispatch({ type: "CHANGE_THEME", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
