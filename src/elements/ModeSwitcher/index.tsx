import { toggleTheme } from "@/redux/ui/dashboard";
import { DarkMode, LightMode } from "../Icon";
import { container, position, wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ModeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootState) => state.dashboard.theme.current
  );
  return (
    <>
      <div onClick={() => dispatch(toggleTheme())} className={container()}>
        <div className={position()}>
          <div className={wrapper({ mode: theme as "dark" | "light" })}>
            <DarkMode width={29} height={29} />
            <LightMode width={29} height={29} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeSwitcher;
