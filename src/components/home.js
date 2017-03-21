import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home'>
        <div className='home-cover'>
          <div>
          <h1 style={{color:'white'}}>White Album</h1>
          <p style={{color:'white'}}>FrontEnd Web Developer</p>
          <a href='https://github.com/happylrx'>MY GITHUB</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
