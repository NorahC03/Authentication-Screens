import React from "react";

export class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        {/* <div className="image">
          <img src='./Desktop_bg.png' alt='' />
        </div> */}
        <div className="base-container" >
          <div className="header"> User Login</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                {/* <label htmlFor="username">Username</label> */}
                <input className="input" type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input className="input" type="password" name="password" placeholder="Password" />
              </div>
              <label className="label"> <input type="radio" value="remember" name="Remember" /> Remember
                <a href="#" className="anchor">Forgot Password</a>
              </label>


            </div>
          </div>
          <button type="button" className="btn">
            SUBMIT
          </button>
        </div>
      </>
    );
  }
}
