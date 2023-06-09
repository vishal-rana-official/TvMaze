import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { loginValidation } from '../../helper/validate';
import { loginUser } from '../../helper/helper';
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: loginValidation,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {           
            let loginPromise = loginUser(values)
            toast.promise(loginPromise,{
                loading: "Creating",
                success: "Login Successfully",
                error: "Could not Login"
            })
            loginPromise.then((data)=>{setTimeout(() => {
                localStorage.setItem('token',data.token)
                navigate('/search')
            }, 500);}).catch((error)=>{toast.error(error.response.data.error)})
        }
    })
    return (
        <div className='register'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="register-container">

                <div className="heading">
                    <span>Login to continue...</span>
                </div>

                <form className='form' onSubmit={formik.handleSubmit}>

                    <div className="form-items">
                        <input {...formik.getFieldProps('email')}  type="email" placeholder='Email*' />
                        <input {...formik.getFieldProps('password')}  type="password" placeholder='Password*' />
                        <button  type='submit'>Register</button>
                    </div>

                    <div className="form-footer">
                        <span className='form-footer-text'>New User? <Link className='form-footer-text' to="/register">Register Now</Link></span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login