import React, { Component } from 'react';
import '../styles/style.css'; 
import '../styles/mobile.css'; 

class Footer extends Component {
    render() {
       return (
        <div id="footer">
          <div>
            <span>Vadodra, India | 9099908876</span>
            <p>
              &copy; "version" by Kaizen Fitness. All rights reserved.
            </p>
          </div>
          <div id="connect">
            <a href="https://www.facebook.com/groups/743155436036955/"  target="_blank" rel="noopener noreferrer" ><i className="fa fa-facebook"></i></a>
            <a href="https://freewebsitetemplates.com/go/twitter/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://freewebsitetemplates.com/go/googleplus/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
            <a href="https://freewebsitetemplates.com/go/pinterest/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a>
          </div>
         </div>
       )
    }
  }
  export default Footer;
  