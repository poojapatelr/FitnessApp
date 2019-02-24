import React, { Component } from 'react';
import '../styles/style.css'; 
import '../styles/mobile.css'; 

class Contact extends Component {
    render() {
       return (
        <div id="body">
          <h2>Contact</h2>
          <form action="index.html">
            <h3>Inquiries</h3>
            <label htmlFor="name">
              <span>Name</span>
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input type="text" id="email" />
            </label>
            <label htmlFor="subject">
              <span>Subject</span>
              <input type="text" id="subject" />
            </label>
            <label htmlFor="message">
              <span>Message</span>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" id="send" value="Send" />
          </form>
        </div>
       )
    }
  }
  export default Contact;