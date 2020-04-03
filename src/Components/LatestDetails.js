import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Bounce from 'react-reveal/Bounce';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { article: [] }
    }
    componentDidMount = () =>{
        const apiKey = '722acf4ca2af40939dfe85afcd600412'
        const title  = this.props.location.state.item;
        axios.get(`https://newsapi.org/v2/everything?q=${title}&apiKey=${apiKey}`)
        .then(response => {
            console.log(response.data)
            this.setState({article:response.data.articles[0]})
            console.log(this.state.news)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() { 
        const info = this.state.article;
        return ( 
            <Bounce>
            <div className="details-body">
            <div className="items-details">
                <div className="item-imgInner">
                    <img src={info.urlToImage} alt=""/>
                </div>
                <div className="item-details">
                  <h3 className="head">{info.title}</h3>
                  <p className="show">Author :{info.author}</p>
                  <p className="show">Publication:{info.publishedAt}</p>
                </div>
                <div className="para" >
                   <p>{info.description}</p>
                   <div className="btns">
                <button className="btn">
                   <Link to = "/Latest" >Go Back</Link>
                </button>
                <button className="btn">
                    <a href={info.url}>
                        Read More 
                    </a>
                </button>
            </div>
         </div>
       </div>
    </div>
    </Bounce>
         );
    }
}
 
export default App;