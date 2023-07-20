import { RootState } from "@/redux/store";
import { updateDarkMode, setTheme } from "@/redux/ui/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useSwitchTheme = () => {
  const dispatch = useDispatch();
  const { systemDarkMode, current } = useSelector(
    (state: RootState) => state.dashboard.theme
  );

  const saveLocalStorage = (value: string) =>
    localStorage.setItem("theme", value);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (systemDarkMode) {
        dispatch(setTheme("dark"));
        saveLocalStorage("dark");
      }
    }
  }, [systemDarkMode, dispatch]);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      dispatch(updateDarkMode(event.matches));
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, [dispatch]);

  const switchTheme = (value: string) => {
    dispatch(setTheme(value));
    saveLocalStorage(value);
  };

  return { theme: current, switchTheme };
};

export default useSwitchTheme;
