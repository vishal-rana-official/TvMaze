import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { registerValidation } from '../../helper/validate';
import { registerUser } from '../../helper/helper';
import './register.css'

const Register = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {           
            let registerPromise = registerUser(values)
            toast.promise(registerPromise,{
                loading: "Creating",
                success: "Register Successfully",
                error: "Could not Register"
            })
            registerPromise.then(()=>{setTimeout(() => {
                navigate('/login')
            }, 500);}).catch((error)=>{toast.error(error)})
        }
    })
    return (
        <div className='register'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="register-container">

                <div className="heading">
                    <span>Registration Form</span>
                </div>

                <form className='form' onSubmit={formik.handleSubmit}>

                    <div className="form-items">
                        <input {...formik.getFieldProps('username')}  type="text" placeholder='Username*' />
                        <input {...formik.getFieldProps('email')}  type="email" placeholder='Email*' />
                        <input {...formik.getFieldProps('password')}  type="password" placeholder='Password*' />
                        <button  type='submit'>Register</button>
                    </div>

                    <div className="form-footer">
                        <span className='form-footer-text'>Already Register? <Link className='form-footer-text' to="/login">Login Now</Link></span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register