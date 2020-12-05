import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.util'

import './SignIn'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });  
    }
    catch(error)
    {}
    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() { 
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;


/*import React, { Component } from 'react';
import {signInWithGoogle} from '../../firebase/firebase.util'
import './Login.scss'



class Login extends Component {

    state = { mode: "login" }

    showRegister = (event) => {
        this.setState({ mode: "register" });
    }
    showLogin = (event) => {
        this.setState({ mode: "login" });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:"", password:""})
    }

    handleChange = (event) =>{
        const{value, name} = event.target;
        this.setState({[name]:value})
    }
    onRegister = () => {
        alert('Register');
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.state.mode==="login"?'login_container':'classes.hide'}>
                    <div className='heading'>Login</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='data_row'>
                            <label>Email:</label>
                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} required></input>
                        </div>

                        <div className='data_row'>
                            <label>Password:</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
                        </div>

                        <div className='register_row'>Not registered? <a href="javascript:void(0)" onClick={this.showRegister}>register here</a></div>
                        <div className='toolbar'>
                            <button type="submit">Submit</button>
                        <button  onClick={signInWithGoogle}>Sign in with Google</button>
                        </div>
                    </form>
                </div>
               
            
            </React.Fragment >
        );
    }
}

export default Login;
*/