import toast from "react-hot-toast"

export async function registerValidation(values){
    const errors = usernameVerify({},values)
    passwordVerify(errors, values)
    emailVerify(errors, values)
    return errors
}

export async function loginValidation(values){
    const errors = passwordVerify({}, values)
    emailVerify(errors, values)
    return errors
}

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required...") 
    } else if(values.username.includes(" ")){
        error.username = toast.error("username contains empty spaces...")
    }
    return error;
}

function passwordVerify(errors = {}, values){
    if(!values.password){
        errors.password = toast.error("Password Required...!")
    } else if(values.password.includes(' ')){
        errors.password = toast.error("Password does not contain empty spaces...!") 
    } else if(values.password.length < 8){
        errors.password = toast.error("Password must be more than 8 Characters...!")
    } else if(values.password.length > 16){
        errors.password = toast.error("Password must not be more than 16 Characters...!")
    } else if(!/^[a-zA-Z0-9]+$/.test(values.password)){
        errors.password = toast.error("Password must only contains Characters...!")
    }
    return errors;
}

function emailVerify(errors = {}, values){
    if(!values.email){
        errors.email = toast.error("Email required...!")
    } else if(values.email.includes(" ")){
        errors.email = toast.error("Email does not contain empty spaces...!")
    } else if(!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.email)){
        errors.email = toast.error("Invalid email address...!")
    }
    return errors; 
}