import { ReactNode } from "react";
import { container, icon, menu, menuItem, wrapper } from "./style";
import { DarkMode, DashboardIcon, LightMode } from "@/elements/Icon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Menu = ({ children }: { children: ReactNode }) => {
  return <ul className={menu()}>{children}</ul>;
};

const MenuItem = ({ children }: { children: ReactNode }) => {
  const active = useSelector(
    (state: RootState) => state.dashboard.aside.active
  );
  return <li className={menuItem({ active })}>{children}</li>;
};

const Nav = () => {
  const active = useSelector(
    (state: RootState) => state.dashboard.aside.active
  );
  return (
    <aside className={wrapper({ active })}>
      <nav className={container()}>
        <Menu>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DashboardIcon />
              </div>
              <span>Table</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <LightMode />
              </div>
              <span>Dashboard</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DarkMode />
              </div>
              <span>Table</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DashboardIcon />
              </div>
              <span>Table</span>
            </a>
          </MenuItem>
        </Menu>
      </nav>
    </aside>
  );
};

export default Nav;
