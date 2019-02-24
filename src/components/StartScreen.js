import React, { Component } from 'react';
import logo from '../images/kaizen_logo.png';
import '../App.css';
import { Link } from 'react-router-3'
import '../styles/style.css'; 
import '../styles/mobile.css'; 

export default class StartScreen extends Component  {
  mobileView (){   
  var getNavi = document.getElementById('navigation');
  var mobile = document.createElement("span");
  mobile.setAttribute("id","mobile-navigation");
  getNavi.parentNode.insertBefore(mobile,getNavi);
  mobile.setAttribute("class","fa fa-bars");
  document.getElementById('mobile-navigation').onclick = function(){
      var a = getNavi.getAttribute('style');
      if(a){
          getNavi.removeAttribute('style'); 
          mobile.classList.remove('fa-times');
          document.getElementById('mobile-navigation').classList.add('fa-bars'); 
      } else {
          getNavi.style.display='block';
          mobile.classList.remove('fa-bars');
          document.getElementById('mobile-navigation').classList.add('fa-times'); 
      }
  };
};
componentDidMount() {
  window.addEventListener('load', this.mobileView);
}

  render() {
     return (
          <div>
            <div id="header">
              <div className="area">
                <div id="logo">
                  <a href="index.html"><img src={logo} alt="LOGO" width="245" height="150" /></a>
                  <h1><a href="index.html">KAIZEN <span>FITNESS</span></a></h1>
                </div>
                <div className="nav-container">
                  
                  <ul id="navigation">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                    <li><Link to="/blog" activeClassName="active">Blogs</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
     )
  }
}







// export default class StartScreen extends Component {
//     render() {
//         return (
//           <div className="App">
            
//             {/* <div id="header">
//               <div class="area">
//                 <div id="logo">
//                   <a href="index.html"><img src={logo} alt="LOGO" height="86" width="170" /></a>
//                 </div>
//                 <div id="header">
//                   <h1><a href="index.html">KAIZEN <span>FITNESS</span></a></h1>
//                   <ul id="navigation">
//                     <li class="current">
//                       <a href="#home">Home</a>
//                     </li>
//                     <li>
//                       <a href="#about">About</a>
//                     </li>
//                     <li>
//                       <a href="#blog">Contact</a>
//                     </li>
//                     <li>
//                       <a href="#contact">Blog</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div> */}

//             <div id="body">
//               {/* <div id="home">
//                 <div id="tagline">
//                   <h1>Kaizen</h1>
//                   <p>
//                     For Better Health &amp; Fitness
//                   </p>
//                 </div>
//                 <img src={ladyInYoga} alt="lady doing yoga" class="figure" />
//               </div> */}

//               {/* <div id="about">
//                 <h2>About</h2>
//                 <div class="content">
//                   <div>
//                     <h3>We Have Free Templates for Everyone</h3>
//                     <p>
//                       Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="https://freewebsitetemplates.com/about/terms/">Terms of Use</a>. You can even remove all our links if you want to.
//                     </p>
//                     <h3>We Have More Templates for You</h3>
//                     <p>
//                       Looking for more templates? Just browse through all our <a href="https://freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="https://freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
//                     </p>
//                     <h3>Be Part of Our Community</h3>
//                     <p>
//                       If you're experiencing issues and concerns about this website template, join the discussion <a href="https://freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
//                     </p>
//                     <h3>Template Details</h3>
//                     <p>
//                       Design version 3. Code version 1. Website Template details, discussion and updates for this <a href="https://freewebsitetemplates.com/discuss/rehabilitation-yoga/">Belle &amp; Carrie Rehabilitation Yoga Web Template</a>. Website Template design by <a href="https://freewebsitetemplates.com/">Free Website Templates</a>. Please feel free to remove some or all the text and links of this page and replace it with your own About content.
//                     </p>
//                   </div>
//                   <img src="images/lady-in-yoga.jpg" alt="lady doing yoga" class="figure" />
//                 </div>
//               </div> */}

//               {/* <div id="Blog">
//                 <h2>Blog</h2>
//                 <ul class="blog">
//                   <li>
//                     <img src="images/group-yoga.jpg" alt="yoga in group" />
//                     <h3><a href="singlepost.html">Summer Yoga Classes</a></h3>
//                     <span>April 7, 2023 </span>
//                     <p>
//                       Duis ultrices tortor non felis convallis bibendum. Maecenas diam velit, sollicitudin at imperdiet ac, consectetur non nibh. Etiam eget dapibus nulla. Nulla placerat mauris ut elit placerat luctus. Aliquam porttitor leo non nisl scelerisque sollicitudin.
//                     </p>
//                   </li>
//                   <li>
//                     <img src="images/yoga-concentrating.jpg" alt="yoga concentrating" />
//                     <h3><a href="singlepost.html">Inner peace</a></h3>
//                     <span>April 6, 2023 </span>
//                     <p>
//                       Nunc sit amet dapibus est, sit amet varius risus. Donec luctus lacinia mauris, at feugiat ligula facilisis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id ligula consectetur, iaculis dolor vitae, gravida mauris.
//                     </p>
//                   </li>
//                   <li>
//                     <img src="images/lying-yoga.jpg" alt="yoga lying down legs in the air" />
//                     <h3><a href="singlepost.html">A Strong and Flexible Body</a></h3>
//                     <span>April 5, 2023 </span>
//                     <p>
//                       In felis ante, aliquet sit amet venenatis at, feugiat sed leo. Fusce pretium, velit in luctus ornare, elit lorem ultrices tortor, sed consectetur orci risus mollis ante. Cras ut aliquam nulla. Aliquam convallis sapien quis cursus condimentum.
//                     </p>
//                   </li>
//                 </ul>
//               </div> */}

//               {/* <div id="contact">
//                 <h2>Contact</h2>
//                 <form action="index.html">
//                   <h3>Inquiries</h3>
//                   <label for="name">
//                     <span>Name</span>
//                     <input type="text" id="name" />
//                   </label>
//                   <label for="email">
//                     <span>Email</span>
//                     <input type="text" id="email" />
//                   </label>
//                   <label for="subject">
//                     <span>Subject</span>
//                     <input type="text" id="subject" />
//                   </label>
//                   <label for="message">
//                     <span>Message</span>
//                     <textarea name="message" id="message" cols="30" rows="10"></textarea>
//                   </label>
//                   <input type="submit" id="send" value="Send" />
//                 </form>
//               </div> */}
//             </div>

//             <div id="footer">
//               {/* <div>
//                 <span>Vadodra, India | 9099908876</span>
//                 <p>
//                   &copy; 2023 by Kaizen Fitness. All rights reserved.
//                 </p>
//               </div>
//               <div id="connect">
//                 <a href="https://www.facebook.com/groups/743155436036955/" id="facebook" target="_blank">Facebook</a>
//                 <a href="https://freewebsitetemplates.com/go/twitter/" id="twitter" target="_blank">Twitter</a>
//                 <a href="https://freewebsitetemplates.com/go/googleplus/" id="googleplus" target="_blank">Google&#43;</a>
//                 <a href="https://freewebsitetemplates.com/go/pinterest/" id="pinterest" target="_blank">Pinterest</a>
//               </div>
//             </div> */}
//           </div>
  
//         );
//       }
// }