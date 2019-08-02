import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ScrollToTop from "../scroll/scrollTop"

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function ToTop() {
    return <h2>ToTop</h2>;
  }

function AppRouter() {
  return (
    <Router>
      <div>22222222222222</div>
    <div style={{height:"500px"}}></div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
        
         
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <ScrollToTop>
      1111111111111111111
    </ScrollToTop>
      </div>
    </Router>
  );
}

export default AppRouter;