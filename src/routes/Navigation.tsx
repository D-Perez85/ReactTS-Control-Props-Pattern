import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import ShoppingPage from "../control-props-pattern/pages/ShoppingPage";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h2>ABOUT</h2>
          </Route>
          <Route path="/users">
            <h2>USERS</h2>
          </Route>
          <Route path="/">
            <ShoppingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Navigation;
