import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';

import Nav from './components/Nav';

const Home = loadable(() => import('./pages/Home'));
const About = loadable(() => import('./pages/About'));
const NotFound = loadable(() => import('./pages/404'));

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
