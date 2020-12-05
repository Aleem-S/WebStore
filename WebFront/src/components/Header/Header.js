import React from 'react'
import { Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import './Header.scss'

const Header = ({ currentUser }) => (
  <div className='header'>
    
    <div className='options'>
      <Link className='option' to='/'>
        Home
      </Link>
      <Link className='option' to='/About'>
        About
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className='option' to='/login'>
          Sign in
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
