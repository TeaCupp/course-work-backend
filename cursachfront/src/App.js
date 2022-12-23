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

import Classroom from "./Classroom";
import Course from "./Course";



class App extends Component {
  state = {}
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/categories" exact={true} component={Category}/>
            <Route path="/expenses" exact={true} component={Expenses}/>

              <Route path="/departments" exact={true} component={Departments}/>
              <Route path="/disciplines" exact={true} component={Disciplines}/>
              <Route path="/groups" exact={true} component={Groups}/>
              <Route path="/faculties" exact={true} component={Faculties}/>
              <Route path="/schedules" exact={true} component={Schedules}/>
              <Route path="/students" exact={true} component={Students}/>
              <Route path="/teachers" exact={true} component={Teachers}/>

            <Route path="/classrooms" exact={true} component={Classroom}/>
            <Route path="/courses" exact={true} component={Course}/>


          </Switch>
        </Router>
    );
  }
}

export default App;
