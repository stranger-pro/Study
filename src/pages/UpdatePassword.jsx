import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import {resetPassword} from '../services/operations/authAPI';

const UpdatePassword = () => {
    const {loading} = useSelector((state) => state.auth.loading);
    const [form,setForm] = useState({password:"" , confirmPassword:""});
    const dispatch = useDispatch();
    const [send, setSend] = useState(false);
    const {token} = useParams();

    const formhandler = (e) => {
        setForm((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value,
            }
        }) 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        console.log(token);
        dispatch(resetPassword(setSend,form.password,form.confirmPassword,token))
    }

  return (
    <div className="min-h-screen text-white bg-richblack-900 flex justify-center items-center">
        {loading ? (
            <>Loading</>
            ) : 
            (<>
                <div className="w-[25%] flex flex-col gap-3 ">
                    <h1 className="text-2xl ">{!send ? "Choose new Password" : "Reset Complete!"}</h1>
                    <p className="text-justify opacity-50 text-[0.87rem]">
                        {!send
                        ? "Almost done. Enter new Password"
                        : "All done.Your account password is  reset. Now go to login page for login"}
                    </p>

                    <div>
                        <form onSubmit={submitHandler} className="flex flex-col">
                        {!send && (
                            <div className="flex flex-col gap-4">
                            <label>
                            <p className="text-[0.7rem] opacity-50 mb-1.5">New Password</p>
                            <input className="w-full rounded-md bg-richblack-800 px-2  py-1"
                                type="password"
                                name="password"
                                placeholder="Enter Your password"
                                value={form.password}
                                onChange={formhandler}
                                required
                            />
                            </label>

                            <label>
                            <p className="text-[0.7rem] opacity-50 mb-1.5">Confirm Password</p>
                            <input className="w-full rounded-md bg-richblack-800 px-2  py-1"
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter Your confirmPassword"
                                value={form.confirmPassword}
                                onChange={formhandler}
                                required
                            />
                            </label>
                            </div>
                            
                        )}
                        {
                            !send ?
                            (<button type="submit" className=" mt-6 bg-yellow-200 rounded-sm font-semibold text-[0.7rem] py-1.5 hover:scale-95 text-black ">Reset Password</button>):
                            (<Link to={'/logIn'}><button className=" mt-6 w-full bg-yellow-200 rounded-sm font-semibold text-[0.7rem] py-1.5 hover:scale-95 text-black ">Return To Login</button></Link>)
                        }
                        </form>

                        <Link  to={"/logIn"}><p className="mt-2 opacity-70 text-[0.8rem]">Back to logIn</p>
                        </Link>
                    </div>
                    
                </div>
      
            </>)
        }
      
    </div>
  )
}

export default UpdatePassword
