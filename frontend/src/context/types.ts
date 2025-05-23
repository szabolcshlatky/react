export type ThemeState = {
  backgroundColor: string;
};

export type ThemeAction = {
  type: string;
  payload: string;
};

export type ThemeContextType = ThemeState & {
  changeTheme: (color: string) => void;
};
