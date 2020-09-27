import React, { Component } from 'react';
import { Route, Link , Redirect } from 'react-router-dom';
import history from '../history';
import axios from 'axios';
 import Dashboard from '../Dashboard';

export default class Login extends Component {
constructor(props, contextx){
    super(props);
    this.state={
        username:'',
        password:'',
        isFake: false
    }
}
onChange =(ev) => {
    console.log('clicked', ev);
    console.log(ev.currentTarget.name);
    this.setState({
        [ev.currentTarget.name]:ev.currentTarget.value
    }, () => {
        console.log(this.state)
    })
}

login =(ev)=>{
    ev.preventDefault();
    let formObj = {
        username:this.state.username,
        password: this.state.password
    };
    axios.post('http://localhost:4000/login/signin', formObj)
            .then(res =>{
                console.log(res.data, 'fhfhgfghfhgf');
                res.data.length > 0 ? this.redirectToSearch() : this.renderMessage();
            } );
            //this.redirectToSearch();

}

redirectToSearch = () => {
 history.push("/dashboard")
}

renderMessage = () => {
 this.setState({
     isFake:true
 })
}

  render() {
    return (
      <div>
        <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control" onChange={(ev) => this.onChange(ev)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control" onChange={(ev) => this.onChange(ev)}/>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-info btn-md" onClick={(ev) => this.login(ev)}>Submit</button>
                            </div>
                            <br/>
                            <div id="register-link" className="text-right">
                                <Link to={"/register"} className="text-info">Register here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
            this.state.isFake && <p>Please use genuine credentials or if you are new please register.</p>
            }
        </div>

        </div>
      </div>
    )
  }
}
