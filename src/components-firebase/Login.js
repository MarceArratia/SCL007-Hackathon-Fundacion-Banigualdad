import React, { Component } from 'react';
import fire from './Fire';
import logo from './logo.png';

class Login extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
          email: '',
          password: '',

      }
    }
    login(event){
      event.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((u)=>{
      }).catch((error) => {
        console.log(error);
      });
    }
  
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    render() {
      return (
        <div id="view-login">
          <div className="container" id="login-box">
            <div>
              <img src={logo} className="app-logo"/>
            </div>

            <form className="row">
              <div className="input-field col s12">
                <input value={this.state.email} onChange={this.handleChange} type="text" name="email" className="autocomplete" id="input" aria-describedby="emailHelp" placeholder="Nombre"/>
              </div>
              <div className="input-field col s12">
                <input value={this.state.password} onChange={this.handleChange} type="text" name="password" className="autocomplete" id="pass" placeholder="Contraseña"/>
              </div>
              <a onClick={this.login} id="button-login" className="waves-effect waves-light btn">INGRESAR</a>
            </form>

          </div>
        </div>
    );
  }
}
export default Login;