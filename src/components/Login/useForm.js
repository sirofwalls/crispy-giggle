import axios from "axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const [errorLoginMessage, setErrorLoginMessage] = useState();
    const [victoryLogMessage, setVictoryLogMessage] = useState();
    const history = useHistory();
    const {getUser} = useContext(UserContext);
    const API_URL = (process.env.NODE_ENV === 'production' ? 'https://api.ptrwlsr.com' : 'http://localhost:5000');

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
        setVictoryLogMessage();

        if(!errors.username && !errors.password) {
            let formData = {
                username: values.username,
                password: values.password
            }

            try {
                const res = await axios.post(API_URL + '/api/auth/login', formData)
                if(res && res.status === 200) setVictoryLogMessage(res.data.message);
                await getUser();
                setTimeout(() => history.push('/'), 3000)
            } catch (err) {
                if (err) setErrorLoginMessage(err.response.data.message);
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