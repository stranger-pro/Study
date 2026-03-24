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
            <div className="flex gap-3 items-center mx-auto justify-between  w-[90%] p-2">
                <Icon className="text-xl w-[17%]"/>
                <span className="font-light text-justify w-[90%]">{link.name}</span>

            </div>
        </NavLink>
      
    </div>
  )
}

export default SidebarLink
