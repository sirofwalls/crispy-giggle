import React from 'react';

import {LoginContainser, FormContainer, FormTitle, FormButton} from './LoginElements';
import FormInput from './FormInput/FormInput';

const Login = () => {
    return (
        <>
        <LoginContainser>
            <FormContainer>
                <FormTitle>Log In</FormTitle>
                <FormInput input='username' type='text' label='Username' />
                <FormInput input='email' type='email' label='Email' />
                <FormInput input='password' type='password' label='Password' />
                <FormButton type='submit'>Submit</FormButton>
            </FormContainer>
        </LoginContainser>
        </>
    )
}

export default Login
