import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import CartScreen from "./screens/CartScreen";
import MainScreen from "./screens/MainScreen";

import "../src/App.css";

function App() {
  return (
    <Router>
      <header className={"nav"}>
        <Nav />
      </header>
      <body>
        <div className="content">
          <Route path={"/"} exact component={MainScreen} />
          <Route path={"/cart"} component={CartScreen} />
        </div>
      </body>
    </Router>
  );
}

export default App;
