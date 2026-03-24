import signupImg from ".././assets/Images/signup.webp"
import Template from "../components/core/auth/Template"


function Signup() {
  return (
    <div className="bg-richblack-900 min-h-screen">
        <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
    </div>
  )
}

export default Signup
