import React, { useState } from 'react'
import './auth.css'
import Test from './Test'

function Auth(props) {
    
    const [ fName, setFName ] = useState('')
    const [ lName, setLName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [ login, setLogin ] = useState(true)

    const isLogin = () => {
        return !login ? 'Signup': 'Login' // If there is no login...???
    }

    const isSignup = () => {
        return !login ? 'Signup': 'Login'
    }

    const toggleLogin = (e) => {
        e.preventDefault()
        setLogin(!login)
        setFName('')
        setLName('')
        setEmail('')
        setPassword('')
    }

    const signUp = () => !login ? ( // If there is no login, they need to sign up
            <>
            <label htmlFor='fName'>First Name: </label>
                <input type='text'
                    id='fName' 
                    value={fName} 
                    onChange={(e) => {setFName(e.target.value)}}
                    />

                <label htmlFor='lName'>Last Name: </label>
                <input type='text'
                    id='lName' 
                    value={lName} 
                    onChange={(e) => {setLName(e.target.value)}}
                    />
            </>

        ) : null

    return (
        <div>
            <h1>{isLogin()}</h1> {/* calling and invoking the function so it runs at any given point */}
            <form action=''>
                {signUp()}
                <label htmlFor='email'>Email: </label>
                <input type='text'
                    id='email' 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}}
                    />

                <label htmlFor='password'>Password: </label>
                <input type='password'
                    id='password' 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
                <button onClick={toggleLogin}>{isSignup()}</button>
                <button type='submit'>Submit</button>
            </form>
            <Test email={email} password={password}/>        
        </div>
    )
}

export default Auth