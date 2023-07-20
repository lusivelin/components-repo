import { Router } from "wouter";

import {
  container,
  content,
  contentGrid,
  contentGridItem,
  darkOverlay,
} from "./style";
import DashboardProps from "./type";

import Nav from "@/components/Nav";
import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleAside } from "@/redux/ui/dashboard";

const Dashboard = ({ children }: DashboardProps) => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.dashboard.aside.active
  );
  return (
    <Router base="/dashboard">
      <div className={container()}>
        <Nav />

        <div
          onClick={() => dispatch(toggleAside())}
          className={darkOverlay({ active })}
        ></div>

        <div className={contentGrid({ active })}>
          <div className={contentGridItem()}>
            <Header />
          </div>
          <div className={contentGridItem()}>
            <div className={content()}>{children}</div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
