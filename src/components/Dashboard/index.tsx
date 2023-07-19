import Nav from "@/components/Nav";
import { container, content, header } from "./style";
import DashboardProps from "./type";
import { Router } from "wouter";
import { useDispatch } from "react-redux";
import { toggleAside } from "@/redux/ui/dashboard";

const Dashboard = ({ children }: DashboardProps) => {
  const dispatch = useDispatch();
  return (
    <Router base="/dashboard">
      <div className={container()}>
        <Nav />

        <header className={header()}>
          <button onClick={() => dispatch(toggleAside())}>Toggle</button>
          Header Sticky
        </header>

        <div className={content()}>{children}</div>
      </div>
    </Router>
  );
};

export default Dashboard;
