import React, { useEffect } from 'react';
import AdminPrivateRoute from './AdminPrivateRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AdminPrivateRoute path="/admin" name="Admin" />
          <PublicRoute path="/" name="Home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
