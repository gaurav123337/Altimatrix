import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      country: '',
      gender: '',
      first_name: '',
      last_name: '',
    };
  }

  onChange = (ev) => {
    console.log('clicked', ev);
    console.log(ev.currentTarget.name);
    this.setState(
      {
        [ev.currentTarget.name]: ev.currentTarget.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  register = () => {
    const registerObj = {
      user_name: this.state.username,
      password: this.state.password,
      email: this.state.email,
      country: this.state.country,
      gender: this.state.gender,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
    axios
      .post('http://localhost:4000/login/signUp', registerObj)
      .then((res) => console.log(res.data));

    this.setState({
      username: '',
      password: '',
      email: '',
      gender: '',
      first_name: '',
      last_name: '',
			country: ''
    });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row centered-form d-flex justify-content-center'>
            <div className='col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-4'>
              <div className='panel panel-default bgColor borderColor noShadow'>
                <div className='panel-heading'>
                  <h3 className='panel-title'>Please sign up </h3>
                </div>
                <div className='panel-body p-3'>
                  <form>
                    <div className='row'>
                      <div className='col-xs-6 col-sm-6 col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            name='username'
                            id='user_name'
                            className='form-control input-sm'
                            placeholder='User Name'
                            value={this.state.username}
                            onChange={(ev) => this.onChange(ev)}
                          />
                        </div>
                      </div>
                      <div className='col-xs-6 col-sm-6 col-md-6'>
                        <div className='form-group'>
                          <input
                            type='password'
                            name='password'
                            id='password'
                            className='form-control input-sm'
                            placeholder='Password'
														value={this.state.password}
                            onChange={(ev) => this.onChange(ev)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='form-control input-sm'
                        placeholder='Email Address'
												value={this.state.email}
                        onChange={(ev) => this.onChange(ev)}
                      />
                    </div>
                    <div className='row'>
                      <div className='col-xs-6 col-sm-6 col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            name='first_name'
                            id='first_name'
                            className='form-control input-sm'
                            placeholder='First Name'
														value={this.state.first_name}
                            onChange={(ev) => this.onChange(ev)}
                          />
                        </div>
                      </div>
                      <div className='col-xs-6 col-sm-6 col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            name='last_name'
                            id='last_name'
                            className='form-control input-sm'
                            placeholder='Last Name'
														value={this.state.last_name}
                            onChange={(ev) => this.onChange(ev)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-6 col-sm-6 col-md-6'>
                        <div className='form-group'>
                          <label htmlFor='gender'>Gender:</label>
                          <input
                            type='radio'
                            id='male'
                            name='gender'
                            value='male'
														checked={this.state.gender==='male'}
                            onChange={(ev) => this.onChange(ev)}
                          />
                          <label htmlFor='male'>Male</label>
                          <br />
                          <input
                            type='radio'
                            id='female'
                            name='gender'
                            value='female'
														checked={this.state.gender==='female'}
                            onChange={(ev) => this.onChange(ev)}
                          />
                          <label htmlFor='female'>Female</label>
                          <br />
                          <input
                            type='radio'
                            id='other'
                            name='gender'
                            value='other'
														checked={this.state.gender==='other'}
                            onChange={(ev) => this.onChange(ev)}
                          />
                          <label htmlFor='other'>Other</label>
                        </div>
                      </div>
                      <div className='col-xs-6 col-sm-6 col-md-6'>
                        <div className='form-group'>
                          <label htmlFor='country'>Country:</label>
                          <select
                            name='country'
                            id='country'
														value={this.state.country || ''}
                            onChange={(ev) => this.onChange(ev)}
                          >
                            <option value=''>--Select one --</option>
                            <option value='india'>India</option>
                            <option value='uae'>UAE</option>
                            <option value='usa'>USA</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <input
                      type='button'
                      value='Register'
                      className='btn btn-info btn-block'
                      onClick={this.register}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
