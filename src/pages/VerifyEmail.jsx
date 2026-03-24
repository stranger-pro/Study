import { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../services/operations/authAPI";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { loading, signupData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    if(!signupData){
        navigate("/signUp");
        return toast.error("SignUp data missing");
    }
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      ),
    );
    setOtp("");
  };

  return (
    <div className="min-h-screen text-white bg-richblack-900 flex justify-center items-center">
      {loading ? (
        <>Loading...</>
      ) : (
        <div className='w-[20%] flex flex-col gap-3 '>
          <h1 className="text-2xl ">Verify Email</h1>

          <p className="text-justify opacity-50 my-2 text-[0.87rem]">A verification code send to you . Enter the code below</p>

          <form onSubmit={submithandler}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span></span>}
              inputStyle={{
                width: "100%",
                border: "1px solid #ccc",
                margin: "4px",
                backgroundColor: "#161D29",
                borderRadius: "3px",
                height: "35px",
              }}
              renderInput={(props) => <input {...props} />}
            />

            <button  className=" mt-8 bg-yellow-200 w-full rounded-sm font-semibold text-[0.7rem] py-1.5 hover:scale-95 text-black " type="submit">Verify Email</button>
          </form>

          <Link to={"/logIn"} className="mt-1 opacity-70 text-[0.8rem]">Back to login</Link>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
