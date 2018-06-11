import React, { Component } from 'react';
import Header from './Components/Header'
import Home from './Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Personal from './Components/Personal';
import School from './Components/School';
import Work from './Components/Work';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Personal" component={Personal} />
          <Route path="/School" component={School} />
          <Route path="/Work" component={Work} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
