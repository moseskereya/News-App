import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Footer from "./End"
import Fade from 'react-reveal/Fade';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { news : [] }
    }
    
    componentDidMount (){
        const apiKey = '722acf4ca2af40939dfe85afcd600412'
        const q = 'news'
        axios.get(`https://newsapi.org/v2/top-headlines?q=${q}&apiKey=${apiKey}&from=yesterday&to=now&sortBy=popularity`)
        .then(response => {
            console.log(response.data)
            this.setState({news:response.data.articles})
            console.log(this.state.news)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() { 
        return ( 
            <>
            <div className="container">
                {
                    this.state.news.map(item => {
                        return(
                            <Fade>
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
                                           {pathname :`/HomeDetails/${item.title}`, state :{ item:item.title}}}>
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
            <Footer/>
            </>
         );
    }
}
 
export default Home;

const styles = {
    color : "#fff",
    textdecoration: "none"
}