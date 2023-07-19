import { ReactNode } from "react";
import { container, icon, menu, menuItem, wrapper } from "./style";
import { DashboardIcon } from "@/elements/Icon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Menu = ({ children }: { children: ReactNode }) => {
  return <ul className={menu()}>{children}</ul>;
};

const MenuItem = ({ children }: { children: ReactNode }) => {
  return <li className={menuItem()}>{children}</li>;
};

const Nav = () => {
  const active = useSelector(
    (state: RootState) => state.dashboard.aside.active
  );
  console.log({ active });
  return (
    <aside className={wrapper({ active })}>
      <nav className={container()}>
        <Menu>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DashboardIcon />
              </div>
              Dashboard
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DashboardIcon />
              </div>
              Table
            </a>
          </MenuItem>

          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DashboardIcon />
              </div>
              Table
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/">
              <div className={icon()}>
                <DashboardIcon />
              </div>
              Table
            </a>
          </MenuItem>
        </Menu>
      </nav>
    </aside>
  );
};

export default Nav;
