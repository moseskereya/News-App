import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import {Link} from 'react-router-dom'
class Head extends Component {
    state = {  }
    render() { 
        const time = new Date()
        return ( 
            <div className="hero">
            <div className="hero-clipped">
                <div className="hero-textbox">
                <Slide left>
                    <h1 className="main-heading">Online News</h1>
               </Slide>
                    <h2 className="sub-heading">Get news from all around the world </h2>
                    <Link to="/About">
                         <a className="cta-btn">Get Latest news</a>
                    </Link>
                    <p className="time">
                        {time.toDateString()}
                    </p>
                </div>
            </div>
        </div>

         );
    }
}
 
export default Head;