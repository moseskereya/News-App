import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import {Link} from 'react-router-dom'
class Head extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hero">
            <div className="hero-clipped">
                <div className="hero-textbox">
                <Slide left>
                    <h1 className="main-heading">Online Magazine App</h1>
               </Slide>
                    <h2 className="sub-heading">Read more</h2>
                    <Link to="/About">
                         <a href="#" className="cta-btn">Get Latest news</a>
                    </Link>
                </div>
            </div>
        </div>

         );
    }
}
 
export default Head;