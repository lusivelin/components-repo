import { useDispatch } from "react-redux";
import { header } from "./style";
import { toggleAside } from "@/redux/ui/dashboard";
import ModeSwitcher from "@/elements/ModeSwitcher";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={header()}>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(toggleAside())}
      >
        Toggle
      </button>
      Header Sticky
      <ModeSwitcher />
    </header>
  );
};

export default Header;
