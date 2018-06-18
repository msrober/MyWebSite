import React, { Component } from 'react';
import pdf from './files/Mitchell Roberts Resume.pdf'

class About extends Component {
  render() {
    return (
      <div>
        <h1 className = "HomeHeader">
          A Little About Me
        </h1>
        <div className = "aboutNode">
        <p className = "AboutP">
        I am a student at Arizona State University pursuing a degree in Software Enigneering with a primary focus in Web and Mobile Applications and a secondary focus in Statistics. Entering my last
        semester as a junior my anticipated graduation date is December of 2019. I currently work as a Web Specialist/Developer at the ASU Print and Imaging Lab. There I've helped build programs that
        automate the workflow process, build custom reports in JasperSoft for management, maintain programs and websites deployed, and maintain a customer service agent for ASU Print Online. When I am not
        working or studying I enjoy living a healthy lifestyle in which I excerise and maintain a semi-healthy diet. I also I have a son and wife in which I spend most of my free time with. As an ambitous
        person I do plan on furthering my education after I gain some years of experience after graduation. I'm currently seeking an intership or job before graduation so I'd love to hear of oppurtunities
        for me to pursue.
        </p>
        </div>
          <form className = "ResumeNode" method="get" action={pdf}>
             <button type = "submit" className = "resumeBtn" >View My Resume</button>
          </form>
      </div>
    );
  }
}

export default About;
