import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

const SidebarLink = ({link}) => {
    const Icon = Icons[link.icon];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchroute = (route) =>{
        return matchPath({path:route}, location.pathname);
    }

    

  return (
    <div  className={`${matchroute(link.path) ? "bg-yellow-300/30 border-l-4 border-l-yellow-5 text-yellow-5" : ""} w-full`}>
        <NavLink to={link.path} >
            <div className="flex gap-3 xm:items-center mx-auto justify-between xm:w-[90%] py-2 xm:px-2">
                <Icon className="text-xl w-full block xd:hidden xm:block xm:w-[17%]"/>
                <span className=" text-justify xd:w-[98%] hidden xd:block xd:pl-3 xm:pl-0 font-semibold  xm:w-[90%]">{link.name}</span>

            </div>
        </NavLink>
      
    </div>
  )
}

export default SidebarLink
