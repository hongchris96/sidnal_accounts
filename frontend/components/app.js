import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import DashboardContainer from './dashboard_container';
import SingleAccountContainer from './single_account_container';
import AnalyticalContainer from './analytical_container';
// import Page404 from './four_o_four';

const App = () => {
  return(
    <div className="main-app">
      <nav className="main-nav">
        <h1>Full Stack Challenge</h1>
        <a href="https://github.com/hongchris96/sidnal_accounts" target="_blank" rel="noopener noreferrer">Chris Hong</a>
        <Link to="/">Home</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={DashboardContainer} />
        <Route path="/accounts/:accountId" component={SingleAccountContainer} />
        <Route path="/analytics" component={AnalyticalContainer} />
        {/* <Route component={Page404} /> */}
      </Switch>
    </div>
  );
};

export default App;