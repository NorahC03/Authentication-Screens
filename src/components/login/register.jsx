import React from "react";

export class Register extends React.Component {


  render() {
    return (
      <div className="base-container" >
        <div className="header"> SIGN UP</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              <input className="input" type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              <input className="input" type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input className="input" type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <button type="button" className="btn">
          Register
        </button>
      </div>
    );
  }
}
