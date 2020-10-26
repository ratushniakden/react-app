import React, { Component, Suspense } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./components/pages/Home'));
const About = React.lazy(() => import('./components/pages/About'));
const SignInFormik = React.lazy(() =>
  import('./components/forms/SignInFormik')
);

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sign_in" component={SignInFormik} />
          </Switch>
        </Suspense>
        <Route />
      </Router>
    );
  }
}

export default App;
