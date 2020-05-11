import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' }
    ]
  }

  courseSelectedHandler = (id) => {
    let course = this.state.courses.find(el => el.id === id);
    if(course) {
      this.props.history.push(`/courses/${course.id}?title=${course.title}`);
    }
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {
            this.state.courses.map(course => {
              return <article 
                className="Course" 
                key={course.id}
                onClick={() => this.courseSelectedHandler(course.id)}>{course.title}</article>;
            })
          }
        </section>
        <Route path={`${this.props.match.url}/:id`} component={Course} />
      </div>
    );
  }
}

export default Courses;