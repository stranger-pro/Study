import { useDispatch, useSelector } from "react-redux"
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {logout} from '../../../services/operations/authAPI';

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  
  return (
    <div className="group relative">
      <div className="cursor-pointer flex gap-2 items-center justify-center text-white">
        {
          user?.image ? <img className="w-8 h-8 border-2 border-white rounded-full" src={user.image} /> : <p >hero</p>
        }
        <FaChevronDown className="w-[0.7rem]" />
      </div>

      <div className="bg-richblack-700 opacity-0 top-10  rounded-md py-2 px-9 -right-15 invisible absolute  flex flex-col gap-2 text-richblack-200
      text-xl z-5 transition-all duration-200 font-semibold text-[1rem] group-hover:opacity-100 group-hover:visible w-fit">
        <div><Link to={'/dashboard/myprofile'}>Dashboard</Link></div>
        <div className="cursor-pointer" onClick={() => (dispatch(logout(navigate)))}>Logout</div>
      </div>
      
    </div>
  )
}

export default ProfileDropdown
