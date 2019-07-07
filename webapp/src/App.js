import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Profile from './screens/Profile'
import Find from './screens/Find'
import Result from './screens/Result'

export default  function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={() => <Redirect to="/find" />} />
        <Route path="/profile" component={Profile} />
        <Route path="/find" component={Find} />
        <Route path="/result" component={Result} />
      </div>
    </Router>
  );
}