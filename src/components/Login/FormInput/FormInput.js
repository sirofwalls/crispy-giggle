import React from 'react';

import {InputLabel, InputInput} from './FormInputElements'

const FormInput = ({input, type, label}) => {
    return (
        <>
        <InputLabel htmlFor={input}>{label}</InputLabel>
        <InputInput 
            id={input}
            type={type}
            name={input}
            placeholder={label}
            // value={values.input}
        />
        </>
    )
}

export default FormInput
