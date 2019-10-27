import React, {FC} from 'react'
import { Redirect, Route, Switch } from 'react-router';
import './App.css';

import Home from './components/Home';
import Addition from './components/Addition';

const App: FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/addition" component={Addition} />
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </div>
);

export default App;
