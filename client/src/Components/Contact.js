import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';


class Contact extends Component {
  render() {
    return (
      <div className="ContactPage">
      <h1 className = "HomeHeader">
        Contact Me
      </h1>
      <hr className = "line"></hr>
        <div className = "phone_info">
          <i class="fas fa-phone"></i>
          <p className = "info">
            (480)334-5092<br></br>
          </p>
        </div>
        <div className = "email_info">
          <i class="far fa-envelope"></i>
          <p className = "info">
            Mitchell.S.Roberts@asu.edu
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
