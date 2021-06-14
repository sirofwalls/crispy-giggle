import React, {useState} from 'react';
import {LoginContainser, FormContainer, FormTitle, FormButton} from './LoginElements';
import FormInput from './FormInput/FormInput';
import useForm from './useForm';
import validate from '../Variables/LoginValidation';

const Login = () => {

    const {
        handleChange,
        handleSubmit,
        values,
        errors
    } = useForm(validate);
    
    return (
        <>
        <LoginContainser>
            <FormContainer onSubmit={handleSubmit}>
                <FormTitle>Log In</FormTitle>
                <FormInput
                    input='username'
                    type='text'
                    label='Username'
                    value={values.username}
                    errors={errors.username}
                    change={handleChange}
                />
                <FormInput
                    input='email'
                    type='email'
                    label='Email'
                    value={values.email}
                    errors={errors.email}
                    change={handleChange}
                />
                <FormInput
                    input='password'
                    type='password'
                    label='Password'
                    value={values.password}
                    errors={errors.password}
                    change={handleChange}
                />
                <FormButton type="submit" >Submit</FormButton>
            </FormContainer>
        </LoginContainser>
        </>
    )
}

export default Login
