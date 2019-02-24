import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router-3';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Blogs from './components/Blog.js'

ReactDOM.render (
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blogs} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById('root')
    );

serviceWorker.unregister();
