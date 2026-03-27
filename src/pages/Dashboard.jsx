import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
    const {loading} = useSelector((state) => state.profile);
  return (
    <div>
      {
        loading ? (<p>Loading</p>):
        <>
            <div className="relative flex min-h-[calc(100vh-3.5rem)]">
                <div className="">
                  <Sidebar/>
                </div>
                <div className="max-h-[calc(100vh-3.5rem)] w-full overflow-y-auto">
                    <div className="mx-auto w-[90%] xd:w-[70%] py-6 no-scrollbar overflow-y-scroll">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
      }
    </div>
  )
}

export default Dashboard
