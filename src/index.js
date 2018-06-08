import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './Home';
import App from './App';
// import About from './About';
// import Contact from './Components/Contact';
// import Personal from './Components/Personal';
// import School from './Components/School';
// import Work from './Components/Work';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
