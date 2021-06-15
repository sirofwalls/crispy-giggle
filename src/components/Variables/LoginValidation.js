export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) errors.username ='Username is required';

    // if (!values.email) errors.email = 'Email is required';
    // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Email is not valid';
    
    if (!values.password) errors.password = 'Password is required';
    if (values.password.length < 8) errors.password = 'The password must be at least 8 characters long';

    return errors;
}