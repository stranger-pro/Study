import React, { useState } from 'react'
import {login} from '../../../services/operations/authAPI';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [formData, setformData] = useState({ email:"",password:"" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function dataHandler (event){
        setformData(prev => {
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
        });
    }

    const [showPassword, setshowPassword] = useState(true);

    function SubmitHandler(e){
        e.preventDefault();
        dispatch(login(formData.email,formData.password,navigate));

        
        //action
    }

  return (
    <div className='text-white'>
      
      <form className='flex gap-5 flex-col' onSubmit={SubmitHandler}>

      
      <div className='flex flex-col '>
      
        <div className='flex flex-col  w-full'>
        <label className='text-[0.8rem] mb-0.5' htmlFor='username'>Email Address</label>
        
        
      
        <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
        required
         type="email"
        name="email"
        id="username"
        value={formData.email}
        onChange={dataHandler}
        placeholder='Enter email address'
        />
        </div>

      </div>

        <div className=' relative flex flex-col'>

        <label className='text-[0.8rem] mb-0.5' htmlFor='password'>Password</label>
        <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
        required
         type={showPassword ? ("password") : ("text")}
        name="password"
        id="password"
        value={formData.password} 
        onChange={dataHandler}
        placeholder='Enter password'
        />

        <span className='absolute top-8 right-3' onClick={() => setshowPassword((prev) => !prev)}>
                {
                  showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)
                }
        </span>

        <Link className='absolute right-0 -bottom-5 text-sky-300 text-[0.7rem]' to="/forgetPassword" ><p >Forget Password</p></Link>

        </div>


        <button className='w-full mt-9 font-semibold py-[0.3rem] rounded-md text-black bg-yellow-400'>Sign in</button>

      </form>
    </div>
  )
}

export default LoginForm
