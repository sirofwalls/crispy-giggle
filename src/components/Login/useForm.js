import axios from "axios";
import { useState, useEffect, useContext } from "react";
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
                const res = await axios.post('http://localhost:5000/api/auth/login', formData)
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