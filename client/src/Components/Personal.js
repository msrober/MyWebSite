import React, { Component } from 'react';
import axios from 'axios';
import Report1 from '../files/My Reports/Large Format Report.pdf'
import Report2 from '../files/My Reports/Joel Lobaugh Records Report.pdf'
import Report3 from '../files/My Reports/Indigo (Press Report).pdf'


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
  ReportList() {
        return (
          <div className = "Reports">
            <div key = "Report1" className = "report">
              <p className="Reporttitle">Large Format Report</p>
              <form method="get" action={Report1}>
                <button type = "submit" className = "resumeBtn" >View Report</button>
              </form>
            </div>
            <div key = "Report2" className = "report">
              <p className="Reporttitle">Customer Report</p>
              <form method="get" action={Report2}>
                <button type = "submit" className = "resumeBtn" >View Report</button>
              </form>
            </div>
            <div key = "Report3" className = "report">
              <p className="Reporttitle">Press Report</p>
              <form method="get" action={Report3}>
                <button type = "submit" className = "resumeBtn" >View Report</button>
              </form>
            </div>
          </div>
        )
  }
// FileList() {
//   const testFolder = './test/';
//   const fs = require('fs');
//
//   fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//       console.log(file);
//     });
//   })
// }


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
      <h1 className = "HomeHeader ReportHeader">
        Reports
      </h1>
      <p className = "ProjectsInfo">
      Check out some of my Reports I have built.
      </p>
      <section className="content_section local">
        <div className="mainBlock">
          <div className="localcontainer">
            <p className="title_bar">
            <i className="fas fa-file-pdf"></i> Jasper Reports
              </p>
          </div>
        </div>
        {this.ReportList()}
      </section>
      </div>
    );
  }
}



export default Personal;
