import React, { Component } from 'react';
import { Route, NavLink, Switch} from 'react-router-dom'; 

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/AsyncComponent/AsyncComponent';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts" exact activeClassName="active">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;

/*
 * OBSERVAÇÕES:
 * O Route que trata o erro 404 precisa ser a última condição dentro do componente Switch 
 * O import do componente NewPost foi removido para que ele fosse carregado de forma assincrona, apenas quando chamado pelo Router 
 * Caso a versão do react seja maior que 16.6, é necessário usar o React.lazy() para importar componentes de forma assincrona
 */