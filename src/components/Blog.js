import React, { Component } from 'react';
import '../styles/style.css'; 
import '../styles/mobile.css'; 
import yogaInGroup from '../images/group-yoga.jpg';
import yogaConcentrating from '../images/yoga-concentrating.jpg';
import yogaLying from '../images/lying-yoga.jpg';

class Blog extends Component {
    
    render() {
       return (
        <div id="body">
          <h2>Blog</h2>
          <ul className="blog">
            <li>
              <img src={yogaInGroup} alt="yoga in group" />
              <h3><a href="singlepost.html">Summer Yoga Classes</a></h3>
              <span>April 7, 2023 </span>
              <p>
                Duis ultrices tortor non felis convallis bibendum. Maecenas diam velit, sollicitudin at imperdiet ac, consectetur non nibh. Etiam eget dapibus nulla. 
                Nulla placerat mauris ut elit placerat luctus. Aliquam porttitor leo non nisl scelerisque sollicitudin.
                Duis ultrices tortor non felis convallis bibendum. Maecenas diam velit, sollicitudin at imperdiet ac, consectetur non nibh. Etiam eget dapibus n
                Nulla placerat mauris ut elit placerat luctus. Aliquam porttitor leo non nisl scelerisque sollicitudin.

              </p>
            </li>
            <li>
              <img src={yogaConcentrating} alt="yoga concentrating" />
              <h3><a href="singlepost.html">Inner peace</a></h3>
              <span>April 6, 2023 </span>
              <p>
                Nunc sit amet dapibus est, sit amet varius risus. Donec luctus lacinia mauris, at feugiat ligula facilisis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id ligula consectetur, iaculis dolor vitae, gravida mauris.
              </p>
            </li>
            <li>
              <img src={yogaLying} alt="yoga lying down legs in the air" />
              <h3><a href="singlepost.html">A Strong and Flexible Body</a></h3>
              <span>April 5, 2023 </span>
              <p>
                In felis ante, aliquet sit amet venenatis at, feugiat sed leo. Fusce pretium, velit in luctus ornare, elit lorem ultrices tortor, sed consectetur orci risus mollis ante. Cras ut aliquam nulla. Aliquam convallis sapien quis cursus condimentum.
              </p>
            </li>
          </ul>
        </div>
       )
    }
  }
  export default Blog;