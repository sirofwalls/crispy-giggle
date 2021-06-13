import React from 'react';

import {InputLabel, InputInput} from './FormInputElements'

const FormInput = ({input, type, label}) => {
    return (
        <>
        <InputInput htmlFor={input}>{label}</InputInput>
        <InputLabel 
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
