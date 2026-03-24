import { useDispatch, useSelector } from 'react-redux';
import {sidebarLinks} from '../../../data/dashboard-links';
import { logout } from '../../../services/operations/authAPI';
import SidebarLink from './SidebarLink';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from "react-icons/vsc";
import Model from '../../common/Model';

const Sidebar = () => {
    const {user,loading:profileLoading} = useSelector((state) => state.profile);
    const {loading:authLoading} = useSelector((state) => state.auth);
    const [conformationModel,setConformationModel] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    if(profileLoading || authLoading){
        return <div>Loading..</div>
    }

  return (
    <div>
        <div className='flex min-w-50 flex-col border-r-2  bg-richblack-800 text-richblack-200
         border-r-richblack-700 h-[calc(100vh-3.5rem)] py-10'>

            <div className='flex w-full items-center flex-col'>
                {
                    sidebarLinks.map((link,i) =>{

                       if(link?.type && link?.type!==user?.accountType) return null;
                       return(
                        <SidebarLink key={i} link={link} />
                       )
                    })
                }
            </div>

            <hr className='w-[85%] mx-auto my-4 text-richblack-200'/>

            <div className='flex w-full items-center flex-col'>
                <SidebarLink 
                    link={{
                        name: "Setting",
                        path: "/dashboard/settings",
                        icon: "VscSettingsGear",
                    }}
                />

                <button className="flex gap-4 cursor-pointer items-center mx-auto justify-between text-richblack-200 w-[90%] p-2"
                 onClick={() => setConformationModel({
                    text1 :"Are You Sure",
                    text2:"you will be logged out of your account",
                    buttonHandler1:()=>dispatch(logout(navigate)),
                    buttonHandler2:()=>setConformationModel(null),
                })}>
                    <VscSignOut className="text-xl w-[20%]" />
                    <span className="cursor-pointer font-semibold flex w-[90%]">{`Logout`}</span>
                </button>

                {conformationModel && <Model data={conformationModel}/>}
            </div>

        </div>    
    </div>
  )
}

export default Sidebar
