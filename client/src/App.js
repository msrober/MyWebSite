import React, { Component } from 'react';
import Header from './Components/Header'
import About from './About';
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
  //runs automatically when the components mounted
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
          <Route exact path="/" component={About} />
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
