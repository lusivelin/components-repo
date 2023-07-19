import { useEffect, useState } from "react";

const useSwitchTheme = () => {
  const [systemDarkMode, setSystemDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const saveLocalStorage = (value: string) =>
    localStorage.setItem("theme", value);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (systemDarkMode) {
        setTheme("dark");
        saveLocalStorage("dark");
      }
    }
  }, [systemDarkMode, theme]);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setSystemDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  const switchTheme = (value: string) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  return { theme, switchTheme };
};

export default useSwitchTheme;
