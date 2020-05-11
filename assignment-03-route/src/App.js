import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">        
        <header>
          <nav>
            <ul>
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
            </ul>
          </nav>
        </header>
                  
        <ol style={{textAlign: 'left'}}>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
        <Switch>
          <Route path="/users" component={Users} />          
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>Page not found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
