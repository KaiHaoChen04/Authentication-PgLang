const validation = (values) => {
    let error = {}
    const email_pattern = new RegExp("^[^\s@]+@[^\s@]\.[^\s@]+$");
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === ''){
        error.name = 'Name cannot be empty'
    }
    else{
        error.name = ''
    }
    if(values.email === ''){
        error.email = 'Email cannot be empty'
    }
    else if (!email_pattern.test(values.email)){
        error.email = 'Email is invalid'
    }
    else{
        error.email = ''
    }
    if(values.password === ''){
        error.password = 'Password cannot be empty'
    }
    else if(!password_pattern.test(values.password)){
        error.password = 'Password incorrect'
    }
    else{
        error.password = ''
    }
    return error;
}
export default validation;