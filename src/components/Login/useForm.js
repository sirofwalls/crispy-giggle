import axios from "axios";
import { useState, useEffect } from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const [errorLoginMessage, setErrorLoginMessage] = useState()
    const [victoryLogMessage, setVoctoryLogMessage] = useState()

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
        setErrorLoginMessage();
        setVoctoryLogMessage();

        if(!errors.username && !errors.password) {
            let formData = {
                username: values.username,
                password: values.password
            }
            const res = await axios.post('http://localhost:5000/api/auth/login', formData).catch((err) =>{
                if (err) setErrorLoginMessage(err.response.data.message);
            });

            if(res && res.status === 200) {
                setVoctoryLogMessage(res.data.message);
                localStorage.setItem('auth-token', res.data.token)
            }
        }
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        errorLoginMessage,
        victoryLogMessage
    }
}

export default useForm;