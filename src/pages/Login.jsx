import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

function Login() {
    const {isAuth , setIsAuth } = useContext(AuthContext)
    const login = (event)=>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth' , 'true')
    }
  return (
    <div>
        <h1>Авторизация</h1>
        <form onSubmit={login}>
            <MyInput type='text' placeholder="login"/>
            <MyInput type='password' placeholder="password"/>
            <MyButton>sign in</MyButton>
        </form>
    </div>
  )
}

export default Login