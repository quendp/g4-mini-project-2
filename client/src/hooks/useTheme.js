import { useContext, useDebugValue } from "react";
import ThemeContext from "../context/CurrentTheme/CurrentTheme";

const useTheme = () => {
  const { currentTheme } = useContext(ThemeContext);
  useDebugValue(currentTheme, (currentTheme) =>
    currentTheme ? "Theme is active" : "No theme selected"
  );
  return useContext(ThemeContext);
};

export default useTheme;
