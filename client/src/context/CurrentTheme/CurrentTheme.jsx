import React, { createContext, useMemo, useState } from "react";

const ThemeContext = createContext({});

export const CurrentTheme = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    "var(--clr-accent-lights-100)"
  );

  const colorScheme = useMemo(() => ({ currentTheme, setCurrentTheme }));

  return (
    <ThemeContext.Provider value={colorScheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
