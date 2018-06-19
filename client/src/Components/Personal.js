import React, { Component } from 'react';
import axios from 'axios';

class Personal extends Component {
  constructor(props) {
    super();

    this.state = {
      repData: [],
      repCommits: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/msrober/repos').then(response => {
      console.log(response);
      this.setState({
        repData: response.data,
      });
    })

  }

  RepoList() {
    var counter = 0;
    return this.state.repData.map((data) => {
        return (
          <div key = {`RepoElement_${counter++}`} className = {"repository " + data.name}>
            <a href={"https://github.com/msrober/" + data.name} className="title" aria-hidden="true">{data.name}</a>
            <p className="language">{data.language}</p>
          </div>
        )
      })
  }


  render() {
    return (
      <div className="PersonalPage">
      <h1 className = "HomeHeader ProjectHeader">
        Projects
      </h1>
      <p className = "ProjectsInfo">
      Check out some of my project I have contributated to.
      </p>
      <section className="content_section">
        <div className="mainBlock">
          <div className="gitcontainer">
            <p className="title_bar">
            <i className="projectgithub fa fa-github" /> Github Repositories
              </p>
          </div>
        </div>
        <div className="Repos">
        {this.RepoList()}
        </div>
      </section>

      </div>
    );
  }
}



export default Personal;
