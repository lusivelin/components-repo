import { globalStyles } from "@/style/globalStyles";
import { Link, Route } from "wouter";
import Components from "@/pages/components";
import Dashboard from "@/components/Dashboard";
import useSwitchTheme from "./services/ui/useSwitchTheme";
import { darkTheme } from "./style/config";
// import { useRef } from "react";

function App() {
  globalStyles();
  const { theme, switchTheme } = useSwitchTheme();

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <div className={theme === "dark" ? darkTheme.className : ""}>
      <Dashboard>
        <button onClick={() => switchTheme(nextTheme)}>Switch</button>
        <Link href="/components">
          <a className="link">Components</a>
        </Link>

        <Route path="/components" component={Components} />

        <Route path="/users/:name">
          {(params) => <div>Hello, {params.name}!</div>}
        </Route>
      </Dashboard>
    </div>
  );
}

export default App;
