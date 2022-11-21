
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './Title';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Title text="hello world"/>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));