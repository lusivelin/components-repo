import { globalStyles } from "@/style/globalStyles";
import { Link, Route, Router } from "wouter";
import Components from "@/pages/components";

function App() {
  globalStyles();

  return (
    <Router base="/">
      <Link href="/users/1">
        <a className="link">Profile</a>
      </Link>

      <Route path="/components" component={Components} />

      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
    </Router>
  );
}

export default App;
