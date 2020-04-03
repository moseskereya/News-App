import React, { Component } from 'react';
import Details from './Details'
import axios from 'axios'
import Developer  from "./Moses";
import Footer  from "./End";
import Skills from "./Skills"
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { news : [] }
    }
    Search = (e) =>{
        e.preventDefault()
        const apiKey = '722acf4ca2af40939dfe85afcd600412'
        const article = e.target.elements.articles.value;
        axios.get(`http://newsapi.org/v2/everything?q=${article}&from=yesterday&to=now&sortBy=popularity&apiKey=${apiKey}`)

        .then(response => {
            this.setState({news: response.data.articles})
            console.log(this.state.news)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() { 
        return ( 
            <>
             <div className="main">
               <form onSubmit={this.Search}>
                   <input type="text" placeholder="Enter search topic"      name="articles" />
                 <button type="submit" className="btn">Search</button>
               </form>
               <Details details = {this.state.news}/>
             </div>
             <Developer/>
             <Skills/>
             <Footer/>
             </>
         );
    }
}
 
export default Search;