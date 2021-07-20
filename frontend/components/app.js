import React from 'react';
import {Route, Switch} from 'react-router-dom';

import DashboardContainer from './dashboard_container';
import AnalyticalContainer from './analytical_container';
import Page404 from './four_o_four';

const App = () => {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={DashboardContainer} />
        <Route path="/analytics" component={AnalyticalContainer} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;