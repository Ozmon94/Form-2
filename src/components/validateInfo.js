

const validateInfo = (values) =>{
    let errors = {}
 //Username
if(!values.username.trim()){
errors.username = 'Username required'
}
//Email
if(!values.email){
    errors.email = 'Email required'
} else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
    errors.email = 'Email address is invalid'
}
//Password
if(!values.password){
    errors.password = 'Password required'
}else if(values.password.length < 6){
    errors.password = 'Password need to be 6 characters or more'
}
//Password2
if(!values.password2){
    errors.password2 ='Confirm password require'
}else if(values.password !== values.password2 ){
    errors.password2 = 'Passwords do not match'
}

return errors;
}

export default validateInfo