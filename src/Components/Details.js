import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className="container">
            {
                this.props.details.map(item => {
                    return(
                        <Fade left>
                        <div key={item.url}>
                         <div className="items">
                            <div className="item1">
                                <img src={item.urlToImage} alt="img"/>
                               <h4 className="head">{item.title}</h4>
                            </div>
                            <div className="item2">
                               <p>{item.description}</p>
                            </div>
                            <button className="btn">
                             <Link style={styles} to = {
                                 {pathname :`/LatestDetails/${item.title}`, state :{ item:item.title}}}>
                                          Read More
                                      </Link>
                                 </button>
                         </div>
                     </div>
                     </Fade>
                    )
                })
            }
        </div>
         );
    }
}
 
export default Details;

const styles = {
    color : "#fff",
    textdecoration: "none"
}