import { useState, useEffect } from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors(validate(values));

        if(!errors.username && !errors.email && !errors.password) {
            let formData = {
                username: values.username,
                email: values.email,
                password: values.password
            }
            console.log(formData)
        }
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
}

export default useForm;