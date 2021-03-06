import React from 'react';
import {Link} from 'react-router'
class Footer extends React.Component {
  render () {
    return(
    <footer>
      <Link to='/' activeStyle={{color:'white'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i><br />Home</Link>
      <Link to='/blog' activeStyle={{color:'white'}}><i className="fa fa-home" aria-hidden="true"></i><br />Blog</Link>
      <Link to='/work' activeStyle={{color:'white'}}><i className="fa fa-home" aria-hidden="true"></i><br />Work</Link>
      <Link to='/about' activeStyle={{color:'white'}}><i className="fa fa-home" aria-hidden="true"></i><br />About</Link>
    </footer>
    )
  }
}

export default Footer;
