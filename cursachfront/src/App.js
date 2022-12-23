import React, { Component} from "react";
import Category from "./Category";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom" ;
import Home from "./Home";
import Expenses from "./Expenses";

import Departments from "./Departments";
import Disciplines from "./Disciplines";
import Groups from "./Groups";
import Faculties  from "./Faculties";
import Schedules from "./Schedules";
import Students from  "./Students";
import Teachers from "./Teachers";




class App extends Component {
  state = {}
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/categories" exact={true} component={Category}/>
            <Route path="/expenses" exact={true} component={Expenses}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
