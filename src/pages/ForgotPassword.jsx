import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getPasswordResetToken} from '../services/operations/authAPI';

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth.loading);
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setSend));

  }

  return (
    <div className="min-h-screen text-white bg-richblack-900 flex justify-center items-center">
      {loading ? (
        <>Loading</>
      ) : (
        <div className="w-[25%] flex flex-col gap-3 ">
          <h1 className="text-2xl ">{!send ? "Reset Your Password" : "Check Email"}</h1>
          <p className="text-justify opacity-50 text-[0.87rem]">
            {!send
              ? "Have no fear. We'll email you intructions to reset ypur password If you don't have access to your email we can try account recovery"
              : `We have sent the reset email to your ${email}`}
          </p>

          <div>
            <form onSubmit={submitHandler } className="flex flex-col">
              {!send && (
                <label>
                  <p className="text-[0.7rem] opacity-50 mb-1.5">Email Address</p>
                  <input className="w-full rounded-md bg-richblack-800 px-2  py-1"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              )}
              <button type="submit" className=" mt-6 bg-yellow-200 rounded-sm font-semibold text-[0.7rem] py-1.5 hover:scale-95 text-black ">{!send ? "Reset Password" : "Reset Email"}</button>
            </form>

            <Link  to={"/logIn"}><p className="mt-2 opacity-70 text-[0.8rem]">Back to logIn</p>
            </Link>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
