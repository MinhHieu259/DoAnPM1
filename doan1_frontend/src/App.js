import React, { useEffect } from 'react';
import AdminPrivateRoute from './AdminPrivateRoute';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import PublicRoute from './PublicRoute';
import axios from 'axios';
import Login from './components/web/Login';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

// Lấy token đăng nhập của User
axios.interceptors.request.use( function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : ''; 
  return config;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AdminPrivateRoute path="/admin" name="Admin" />
          <PublicRoute path="/" name="Home" />
          <Route path="/login">
                  {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
