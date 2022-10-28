import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/loginScreen.css'

const LoginScreen = ({setShowIsLogged}) => {

const {handleSubmit, register, reset} = useForm()
const [isLogged, setIsLogged] = useState(false)

const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'

 axios.post(URL, data)
 .then(res => {
    console.log(res.data)
    localStorage.setItem('token', res.data.data.token)
    setIsLogged(true)
    setShowIsLogged(true)
})
 .catch(err => console.log(err))   
}

useEffect(() => {
    if(localStorage.getItem('token')) {
        setIsLogged(true)
        setShowIsLogged(true)
    } else {
        setIsLogged(false)
        setShowIsLogged(false)
    }
}, [setShowIsLogged])

const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
    setShowIsLogged(false)
}

if(isLogged) {
    return (
        <div className='logout_btn-container'>
            <button className='logout_btn' onClick={handleLogout}>Logout</button>
        </div>
        
    )
}



  return (
    <div>
        <form className='loginscreen_containder' onClick={handleSubmit(submit)}>
            <div className='loginscreen_inputs'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register('email')} />
            </div>
            <div className='loginscreen_inputs'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' {...register('password')}/>
            </div>
            <button className='loginscreen_btn'>Login</button>
        </form>
    </div>
  )
}

export default LoginScreen