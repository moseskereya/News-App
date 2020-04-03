import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Footer from "./End"
import axios from 'axios'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = { news : [] }
    }

    componentDidMount (){

        const apiKey = '722acf4ca2af40939dfe85afcd600412'
        const q = 'news'
        axios.get(`http://newsapi.org/v2/everything?q=${q}&from=Today&sortBy=publishedAt&apiKey=${apiKey}`)
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
            <div>
                <div className="about">
                   <h2>Latest News Today</h2>
                   <div className="line"></div>
                </div>
               <div className="container">
                {
                    this.state.news.map(item => {
                        return(
                            <div key={item.url}>
                             <div className="items">
                                <div className="item1">
                                    <img src={item.urlToImage} alt=""/>
                                   <h4 className="head">{item.title}</h4>
                                </div>
                                <div className="item2">
                                   <p>{item.description}</p>
                                </div>
                                <button className="btn">
                                       <Link style={styles} to = {
                                           {pathname :`/AboutDetails/${item.title}`, state :{ item:item.title}}}>
                                          Read More
                                      </Link>
                                 </button>
                             </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
            <Footer/>
            </>
         );
    }
}
 
export default About;

const styles = {
    color : "#fff",
    textdecoration: "none"
}