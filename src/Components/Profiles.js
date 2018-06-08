import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Profiles extends React.Component {

  render() {
    return (
      <div className = 'Profiles'>
        <a href = 'https://github.com/msrober' className="github fa fa-github" aria-hidden="true"></a>
        <a href = 'https://www.linkedin.com/in/mitchell-s-roberts/' className="linkedinIcon fa fa-linkedin-square" aria-hidden="true"></a>
      </div>
    );
  }
}

export default Profiles;
