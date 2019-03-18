import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './../../views/Home'

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (<Home />)}
      />
    </Switch>
  </Router>
)

export default Routes