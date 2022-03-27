import React, { useEffect, useLayoutEffect } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PublicRoute from './PublicRoute';
import {mainJS} from './js/main';

function App() {
  useEffect(() => {
    mainJS()
  }, [])
  
 
  return (
    <div className="App">
        <Router>
          <Switch>
              {/* <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/> */}
           
              <PublicRoute path="/" name="Home"/>
             
              
              {/* <Route path="/admin" name="Admin" render={(props) => <Masterlayout {...props}/>}/> */}
              
          </Switch>
        </Router>
    </div>
  );
}

export default App;
