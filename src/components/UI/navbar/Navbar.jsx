import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'
import cl from './Navbar.module.css'

function Navbar() {
  
  const {isAuth , setIsAuth} = useContext(AuthContext);

  const logout = ()=>{
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className='navbar'>
      <MyButton onClick={logout}>
        Out
      </MyButton>
    <div className="navbar__links">
      <Link className={cl.navbarLink} to="/about">about us</Link>
      <Link className={cl.navbarLink} to="/posts">posts</Link>
    </div>
  </div>
  )
}

export default Navbar