import { Link } from "react-router-dom"


const CTAButton = ({children,path,active}) => {
  return (
    <Link to={path}>
        <div className={` w-fit text-[0.9rem] text-center px-3 py-1 font-bold rounded-md flex items-center justify-center gap-1 
        ${active ? "bg-yellow-50 text-black" : "bg-richblack-800 text-white"} transition-all duration-200 hover:scale-95`}>
        
            {children}
        </div>
    </Link>
  )
}

export default CTAButton
