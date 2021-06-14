import React, {useState} from 'react';

import {InputLabel, InputInput, ErrorMessage} from './FormInputElements'

const FormInput = ({input, type, label, value, change, errors}) => {

    
    return (
        <>
        <InputLabel htmlFor={input}>{label}</InputLabel>
        <InputInput 
            id={input}
            type={type}
            name={input}
            placeholder={label}
            value={value}
            onChange={change}
        />
        {errors && <ErrorMessage>{errors}</ErrorMessage>}
        </>
    )
}

export default FormInput
