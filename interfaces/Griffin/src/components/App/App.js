import React, { Suspense, lazy } from "react";
import { css } from "emotion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ErrorBoundary } from "../ErrorBoundary";
import { GlobalStyles } from "../../styles/global.styles";
import Logo from "../../img/logo-small.svg";

const Home = lazy(() => import("../../pages/Home"));
const Queue = lazy(() => import("../../pages/Queue"));
const History = lazy(() => import("../../pages/History"));

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="./">Home</Link>
      </li>
      <li>
        <Link to="./queue">Queue</Link>
      </li>
      <li>
        <Link to="./history">History</Link>
      </li>
    </ul>
  </nav>
);

export const App = props => {
  return (
    <Router basename={"/sabnzbd"}>
      <ErrorBoundary>
        <Logo
          className={css`
            width: 48px;
          `}
        />
        <Nav />
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/queue" component={Queue} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};
