import React, { Component } from 'react';
import sites from "../Images/Moses.jpeg"
class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="skills">
                <div className="dev-content1">
                    <img src={sites} className="img1" alt=""/>
                </div>
            <div className='dev-content2'>
                <h3>About my website</h3>
            <p>I built this website using <a href="https://newsapi.org/">newsapi </a>
            just to let people updated over the world, Mostly about Corona Virus which is wipping our humanity. Please stay home , motivated, safe and happy. This will end. It is not goinr to last forever. 
           </p> 
            <button className="btn">
                <a href="https://newsapi.org/">
                    Get Api Info
                </a>
            </button>
            </div>
        </div>
         );
    }
}
 
export default Skills;

//
