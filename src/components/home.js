import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home'>
        <div className='home-cover'>
          <h1 style={{color:'white'}}>I'M DongMa</h1>
          <p style={{color:'white'}}>FrontEnd Web Developer</p>
          <a href='https://github.com/newming'>MY GITHUB</a>
        </div>
      </div>
    )
  }
}

export default Home;