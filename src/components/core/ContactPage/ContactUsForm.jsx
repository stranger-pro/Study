import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submiteHandler = (data) => {
    // action required
  }

  useEffect(() =>{
    if(isSubmitSuccessful){
      reset({
        email:"",
        firstName:"",
        lastName:"",
        message:""
      })
    }
  },[isSubmitSuccessful,reset])

  return (
    <div className="w-fullmx-auto my-9">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submiteHandler)} >

        {/* first & last */}
        <div className="flex justify-between">
            <div className="flex flex-col gap-1 w-[47%]">
              <label className="text-[0.8rem] opacity-50" htmlFor="firstName" >First Name</label>
              <input 
                id="firstName"
                type="text"
                placeholder="Enter Your First Name"
                {...register("firstName",{ required :"First Name Is Required"})}
                className="bg-richblack-800 rounded-sm text-[0.9rem] text-richblack-200 py-2 px-2.5"
              />
              {
                errors.firstName && (<p className=" mt-0.5 ml-0.5 text-red-400 text-[0.7rem] opacity-60">{errors.firstName.message}</p>)
              }
            </div>
            <div className="flex flex-col gap-1 w-[47%]">
                <label className="text-[0.8rem] border-none opacity-50" htmlFor="lastName" >First Name</label>
                <input 
                  id="lastName"
                  type="text"
                  placeholder="Enter Your Last Name"
                  {...register("lastName")}
                  className="bg-richblack-800 rounded-sm text-[0.9rem] text-richblack-200 py-2 px-2.5"
                />
               
              </div>
        </div>
        
        {/* email */}
        <div className="w-full flex flex-col gap-1">
              <label className="text-[0.8rem] opacity-50" htmlFor="email" >Email</label>
              <input 
                id="email"
                type="email"
                placeholder="Enter Your Email"
                {...register("email",{ required :"Email Is Required"})}
                className="bg-richblack-800 rounded-sm text-[0.9rem] text-richblack-200 py-2 px-2.5"
              />
              {
                errors.email && (<p className=" mt-0.5 ml-0.5 text-red-400 text-[0.7rem] opacity-60">{errors.email.message}</p>)
              }
        </div>

        {/* Messege */}
        <div className="w-full flex flex-col gap-1">
              <label className="text-[0.8rem] opacity-50" htmlFor="message" >Message</label>
              <textarea 
                id="message"
                
                rows="3"
                placeholder="Enter Your Message"
                {...register("message",{ required :"Message Is Required"})}
                className="bg-richblack-800 placeholder:text-[1rem] rounded-sm text-[1rem] text-richblack-200 py-2 px-2.5"
              />
              {
                errors.message && (<p className=" mt-0.5 ml-0.5 text-red-400 text-[0.7rem] opacity-60">{errors.message.message}</p>)
              }
        </div>


        {/* Button */}
        <button type="submit" className="w-full my-5 font-semibold hover:scale-95 duration-200 py-[0.3rem] rounded-md text-black bg-yellow-400">Submit</button>
      </form>
    </div>
  )
};

export default ContactUsForm;
