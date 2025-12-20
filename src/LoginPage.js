import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GiHouseKeys } from "react-icons/gi";
import { Link } from 'react-router-dom'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
    function callLoginApi(values){
        console.log("sending data ", values.username, values.password)
    }
    
    const Schema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'Username  5 se jyada na ho ')
            .required('Username dalna jaruri ha '),
        password: Yup.string()
            .min(8, 'Password kam se kam 8 character ka hona chaiye ')
            .required('Password dalna jaruri ha ')
    })
    
    const {values, handleSubmit, handleChange, errors, handleBlur, touched} = useFormik({
        initialValues:{
            username: "",
            password: ""
        },
        onSubmit: callLoginApi,
        validationSchema: Schema,
    })
    
    return (
        <div className='flex justify-center items-center w-full h-screen bg-blue-500'> 
            <form onSubmit={handleSubmit}>
                <div className='w-auto flex flex-col'>
                    <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                    
                    <div className='relative mt-10'>
                        <CiUser className='absolute text-3xl top-3 left-2 text-white z-10'/>
                        <input 
                            onBlur={handleBlur} 
                            name="username" 
                            onChange={handleChange} 
                            type="text" 
                            placeholder='Username' 
                            className='border border-white rounded bg-transparent text-white pl-10 h-12 w-80 placeholder-white/70' 
                        />
                        {touched.username && errors.username && (
                            <div className='text-red-300 text-sm mt-1'>{errors.username}</div>
                        )}
                    </div>
                    
                    <div className='relative mt-5'>
                        <GiHouseKeys className='absolute text-3xl top-3 left-2 text-white z-10'/>
                        <input 
                            onBlur={handleBlur}  
                            name="password" 
                            onChange={handleChange} 
                            type="password" 
                            placeholder='Password' 
                            className='border border-white rounded bg-transparent text-white pl-10 h-12 w-80 placeholder-white/70' 
                        />
                        {touched.password && errors.password && (
                            <div className='text-red-300 text-sm mt-1'>{errors.password}</div>
                        )}
                    </div>
                    
                    <button 
                        type="submit"
                        className='bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 w-80 h-10 rounded text-blue-700 mt-6 hover:bg-gray-100'
                    > 
                        Login
                    </button>
                    
                    <Link to="/forgotpassword" className='text-white self-center hover:underline text-sm mb-3'>
                        Forgot Password ?
                    </Link>
                    
                    <div className='self-center text-white text-sm'>
                        <p>Don't have an account? <Link to={'/signup'} className='underline'>Sign Up</Link></p>
                    </div>
                    
                    <Link to={'/'} className='text-white underline self-center border-2 bg-red-500 rounded-xl mt-3'>Back </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage