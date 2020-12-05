import React from 'react';

import './App.css';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import HomePage from './Pages/Home'
import SignInAndSignUp from './components/Login/SignInSignUp'
import Header from './components/Header/Header'
import {auth, createUserProfileDocument} from './firebase/firebase.util'
import {setCurrentUser} from './redux/user/UserActions'
import {connect} from 'react-redux'

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()

        });
      });
    }
      setCurrentUser (userAuth);
    });
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
      
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' render = {()=> this.props.currentUser ? (<Redirect to='/' /> ) : (<SignInAndSignUp/>)}/>
               </Switch>
      
    </div>
    
  );
}
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser

})
const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispathToProps)( App);
