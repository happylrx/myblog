import React from 'react';
import App from './App'
import Home from './components/home.js'
import Blog from './components/blog.js'
import Work from './components/work.js'
import About from './components/about.js'
import Post from './components/post.js'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

export default function() {
  return(
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='blog' component={Blog}/>
            <Route path='about' component={About}/>
            <Route path='work' component={Work}/>
            <Route path='post/:title' component={Post}/>
          </Route>
        </Router>
      )
}
