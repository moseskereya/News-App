import React, { Component } from 'react';
class End extends Component {
    state = {  }
    render() { 
        var time = new Date();
        return ( 
            <div className="end">
                <h5>News</h5>
                <h5>&copy; MosesCodes1</h5>
                <h5>{time.getFullYear()}</h5>
            </div>
         );
    }
}
 
export default End;