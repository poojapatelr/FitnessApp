import React, { Component } from 'react';
import '../styles/style.css'; 
import '../styles/mobile.css'; 
import ladyYoga from '../images/lady-in-yoga.jpg';

class About extends Component {
    render() {
       return (
        <div id="body">
          <h2>About</h2>
          <div className="content">
            <div>
              <h3>We Have Free Templates for Everyone</h3>
              <p>
                Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="https://freewebsitetemplates.com/about/terms/">Terms of Use</a>. You can even remove all our links if you want to.
              </p>
              <h3>We Have More Templates for You</h3>
              <p>
                Looking for more templates? Just browse through all our <a href="https://freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="https://freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
              </p>
              <h3>Be Part of Our Community</h3>
              <p>
                If you're experiencing issues and concerns about this website template, join the discussion <a href="https://freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
              </p>
              <h3>Template Details</h3>
              <p>
                Design version 3. Code version 1. Website Template details, discussion and updates for this <a href="https://freewebsitetemplates.com/discuss/rehabilitation-yoga/">Belle &amp; Carrie Rehabilitation Yoga Web Template</a>. Website Template design by <a href="https://freewebsitetemplates.com/">Free Website Templates</a>. Please feel free to remove some or all the text and links of this page and replace it with your own About content.
              </p>
            </div>
            <img src={ladyYoga} alt="lady doing yoga" className="figure" />
          </div>
        </div>
       )
    }
  }
  export default About;
  