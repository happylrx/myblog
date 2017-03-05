import React from 'react';
import {Link} from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav'>
        <h2>我的博客</h2>
        <Link to='/' activeStyle={{color:'white'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i>Home</Link>
        <Link to='/blog' activeStyle={{color:'white'}}><i className="fa fa-home" aria-hidden="true"></i>Blog</Link>
        <Link to='/work' activeStyle={{color:'white'}}><i className="fa fa-home" aria-hidden="true"></i>Work</Link>
        <Link to='/about' activeStyle={{color:'white'}}><i className="fa fa-home" aria-hidden="true"></i>About</Link>
      </div>
    )
  }
}

export default LeftNav;
