import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Moses extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="developers">
                <Fade right>
                <div className="dev-content">
                    <h2>My Name is Moses Lazaro</h2>
                    <h3>I`m a self tought Software Developer in Arusha Tanzania </h3>
                    <h4>I`m Passionate about Learnig new stuff</h4>
                    <button className="btn">
                        <a href="mailto:lazaromoses77@gmail.com" className="btn">
                          Contact me
                        </a>
                     </button>
                </div>
                </Fade>
            </div>
         );
    }
}
 
export default Moses;