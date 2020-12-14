import React from 'react'
import { Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import CardDropdown from '../Cart/CartDropdown'
import CartIcon from '../Cart/CartIcon'
import { ReactComponent as Logo } from '../../Assets/crown.svg';

import './Header.scss'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/shop'>
        Contact
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
      <CartIcon/>
    </div>

    {hidden ? null: <CardDropdown/>}
  </div>
);

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) =>({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
