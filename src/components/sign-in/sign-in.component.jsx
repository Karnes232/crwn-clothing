import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        console.log(email, password)
        setEmail('')
        setPassword('')
    }

    const handleChange = event => {
        const { value, name } = event.target
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action="" method="post" onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email}
                    handleChange={handleChange} 
                    label='email'
                    required 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required 
                />
                <div className="buttons">
                    <CustomButton type="submit" > Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                        Sign in with Google 
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
