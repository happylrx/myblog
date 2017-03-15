import React from 'react';
import Slider from 'react-touch-slider';

import img15 from "../images/15.jpg"
import img16 from "../images/16.jpg"
import img17 from "../images/17.jpg"
import img18 from "../images/18.jpg"
class About extends React.Component {

  render () {
    let img=[img15,img16,img17,img18]
    return(
      <div className="about">
        <div className="lunbotu">
          <Slider autoPlayInterval={2e3} imgs={img}/>
        </div>
      </div>
    )
  }
}
export default About;
