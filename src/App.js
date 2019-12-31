import React from 'react';
import { Provider } from 'react-redux';

import CommitDetail from './Components/Commit/CommitDetail';
import Commits from './Components/Commit/Commits';
import Home from './Components/Home';
import configureStore from './Redux/configureStore';
import { Route, Router, Switch } from './Utils/Routing';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/commit" component={Commits} />
        <Route exact path="/commit/:sha" component={CommitDetail} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
