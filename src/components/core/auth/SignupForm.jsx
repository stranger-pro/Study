
import { useState } from 'react'
import {ACCOUNT_TYPE} from '../../../utils/constant'
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import Tab from '../../common/Tab';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {sendOtp} from '../../../services/operations/authAPI';
import {setSignupData} from '../../../slices/authSlice';


const SignupForm = () => {
   const [accountType , setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
   const [formData, setformData] = useState({ firstName:"",lastName:"", email:"", password:"", confirmPassword:"",accountType:"" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
     
      function dataHandler (event){
          setformData(prev => {
              return{
                  ...prev,
                  [event.target.name] : event.target.value,
              }
          });
      }
  
      const [showPassword, setshowPassword] = useState(true);
      const [showcreatePassword, setshowcreatePassword] = useState(true);
  
      function SubmitHandler(e){
          e.preventDefault();
          if(formData.password != formData.confirmPassword){
            return toast.error("Password Not Match");;
          }
          //action
          const signupData = {
          ...formData,
          accountType:accountType,
          }
          console.log(signupData);
          dispatch(setSignupData(signupData));
          dispatch(sendOtp(formData.email,navigate));


          // Reset
          setformData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          })
          setAccountType(ACCOUNT_TYPE.STUDENT)
      }

      const tabData = [
          {
            id: 1,
            tabName: "Student",
            type: ACCOUNT_TYPE.STUDENT,
          },
          {
            id: 2,
            tabName: "Instructor",
            type: ACCOUNT_TYPE.INSTRUCTOR,
          },
        ]
  
    return (
      <div className='text-white'>
        {/* Tab */}
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />

        {/* Form */}
        <form onSubmit={SubmitHandler} >
        
        {/* First Last*/}
        <div className='flex gap-3 mb-2'>


        <div className='flex flex-col w-[50%]'>
        <label className='text-[0.8rem] mb-0.5' htmlFor='username'>First Name</label>
          <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
           type="text"
          name="firstName"
          id="username"
          value={formData.firstName}
          onChange={dataHandler}
          placeholder='First Name'
          />
        </div>

        <div className='flex flex-col  w-[50%]'>
        <label  className='text-[0.8rem] mb-0.5' htmlFor='lastname'>Last Name</label>
          <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
          type="text"
          name="lastName"
          id="lastname"
          value={formData.lastName}
          onChange={dataHandler}
          placeholder='Last Name'
          />
        </div>


        </div>
        

        {/* Email */}
        <div className='flex flex-col mb-2'>
        <label  className='text-[0.8rem] mb-0.5' htmlFor='email'>Email</label>
        <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
         required
         type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={dataHandler}
        placeholder='Enter Your Email'
        />
        </div>
        

        {/* password */}
        <div className='flex gap-3'>


        <div className='flex flex-col relative  w-[50%]'>


        <label  className='text-[0.8rem] mb-0.5' htmlFor='password'>Create Password</label>
          <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
           required
           type= {showPassword==true ? "password" : "text"}
          name="password"
          id="password"
          value={formData.password} 
          onChange={dataHandler}
          placeholder='Create Password'
          />
  
          <span className='absolute right-2 top-8' onClick={() => setshowPassword((prev) => !prev)}>
                  {
                      showPassword===true ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)
                  }
          </span>
        </div>

          <div className='flex flex-col relative  w-[50%]'>

          <label  className='text-[0.8rem] mb-0.5' htmlFor='createpasswoed'>Conform Password</label>
          <input className='bg-richblack-800 px-1.75 py-2 rounded-md text-[0.9rem]'
            required
          type= {showcreatePassword ? "password" : "text"}
          name="confirmPassword"
          id="createpasswoed"
          onChange={dataHandler}
          value={formData.confirmPassword} 
          placeholder='Conform Password'
          />
  
          <span className='absolute right-2 top-8' onClick={() => setshowcreatePassword((prev) => !prev)}>
                  {
                    showcreatePassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)
                  }
          </span>
          </div>


        </div>
  
          
  
          <button type='submit' className='w-full mt-9 font-semibold hover:scale-95 duration-200 py-[0.3rem] rounded-md text-black bg-yellow-400'>Create Account</button>
  
        </form>

        </div>
    )
}

export default SignupForm
