import React, { Component } from "react";
import {
  CForm,
  CInput,
  CInputGroup,
} from "@coreui/react";
import { app } from '../../../base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    app.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(() => {
      this.props.history.push('/dataManage')
    }).catch(function (error) {
      console.log(error)
    });
  }

  render() {
    return (
      <div style={{ width: 500, height: 500, textAlign: "center", marginLeft: "30%", marginTop: "10%" }}>
        <CForm onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <br />
          <CInputGroup>
            <CInput
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </CInputGroup>
          <br />
          <CInputGroup>
            <CInput
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </CInputGroup>
          <br />
          {/* <Link><CButton className="btn btn-primary" type="submit" value="Submit">Login</CButton></Link>  */}
          <CInput className="btn btn-primary" type="submit" value="Login"></CInput>

        </CForm>

      </div>
    )
  }
}

export default Login;
