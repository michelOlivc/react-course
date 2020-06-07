import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import Spinner from '../../../components/Spinner/Spinner';

import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });    
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { 
            ...post, 
            author: 'Michel' 
          }
        });        
        this.setState({ posts: updatedPosts, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true })
      });
  }

  postSelectedHandler = (id) => {
    // this.setState({ selectedPostId: id })
    // this.props.history.push({ pathname: `/posts/${id}` });
    this.props.history.push(`/posts/${id}`);
  }
  
  render() {
    let posts = <Spinner />;

    if(!this.state.loading) {
      if(!this.state.error) {
        if(this.state.posts.length > 0) {
          posts = this.state.posts.map(post => {
              return (
                // <Link to={`/${post.id}`} key={post.id} >
                  <Post                
                    title={post.title}
                    key={post.id} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
              );
            }
          );
        } else {
          posts = <p style={{ textAlign: 'center' }}>There're no posts.</p>;
        }
      } else {
        posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
      }
    } 
    
    return (
      <div>
        <section className="Posts">
          {posts}
        </section> 
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;