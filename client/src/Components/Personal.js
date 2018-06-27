import React, { Component } from 'react';
import axios from 'axios';
import Report1 from '../files/My Reports/Large Format Report.pdf'
import Report2 from '../files/My Reports/Joel Lobaugh Records Report.pdf'
import Report3 from '../files/My Reports/Indigo (Press Report).pdf'


class Personal extends Component {

  constructor(props) {
    super();
    // this.urls = [];
    this.state = {
      repData: [],
      repCommits: [],
    };
  }
//https://github.com/msrober/MyWebSite/commits/d98fa7bcd2d6edefeb89e65452d4a35a8f785e91
  componentDidMount() {
    axios.get('https://api.github.com/users/msrober/repos').then(response => {
      console.log(response);
      this.setState({
        repData: response.data,
      });
      // this.getRepoInfo(this.state.repData);
    })
  }

  // getRepoInfo(repData) {
  //   console.log(repData.length);
  //   this.state.repData.map((data) => {
  //       for (var i = 0; i < 1; i++) {
  //         var repo = data.name;
  //         console.log(repo);
  //         var http = "https://api.github.com/repos/msrober/" + repo + "/commits";
  //         axios.get(http).then(repoResponse => {
  //           console.log(repoResponse);
  //           this.state.repCommits[i] = repoResponse.data;
  //         })
  //       }
  //   })
  // }
  //
  // addtoArray() {
  //   var counter = 0
  //   this.state.repData.map((data) => {
  //     var http = "https://api.github.com/repos/msrober/" + data.name + "/commits";
  //     this.urls[counter++] = http;
  //   })
  //   console.log("Here " + this.state.repData.length);
  //   var counter2 = 0;
  //   this.urls.map((data) => {
  //     axios.get(this.urls[counter2]).then(response => {
  //       console.log(response);
  //       this.state.repCommits[counter2++] = response.data.length;
  //     })
  //     console.log(this.state.repCommits[counter2]);
  //   })
  // }

  // getCommits(repoName) {
  //   var http = "https://api.github.com/repos/msrober/" + repoName + "/commits";
  //   axios.get(http).then(response => {
  //     console.log(response);
  //   })
  // }

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
