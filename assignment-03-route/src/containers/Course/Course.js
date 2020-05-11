import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: ''
  }
  
  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    if(query.has('title') && query.get('title') !== this.state.title) {
      this.setState({ title: query.get('title') });    
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;