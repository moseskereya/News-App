import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Namv extends Component {
    state = {  }
    render() { 
        return ( 
            
            <main>
             <nav>
                <h1 className="title"><span>N</span>ews</h1>
              <ul>
                <Link className="link" to = "/">
                    <li>Home</li> 
                    </Link>
             <Link className="link" to = "/About">
                <li>
                    Latest
                </li> 
             </Link>
             <Link className="link" to = "/Latest">
                 <li>
                 About
                </li>
             </Link>
              </ul>
             </nav>
          </main>
         );
    }
}
 
export default Namv;