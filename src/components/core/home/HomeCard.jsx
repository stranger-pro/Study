import { FaUserTie } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";

const HomeCard = ({heading, desc , lesson, rank}) => {
  return (
    <div className="relative bg-black h-full text-white  transition-all duration-200 hover:bg-white border-white/35 rounded-sm border hover:border-black/5 hover:shadow-[10px_10px_yellow] hover:text-black flex-col justify-between p-3 ">
        <div className="text-2xl font-bold opacity-80">
            {heading}
        </div>
            
        <div className="text-sm opacity-45 mt-4 mb-8">
            {desc}
        </div>

        <div className="relative buttom-0">
            <div className="border-t border-dashed border-gray-400 mb-4"></div>
            <div className="flex justify-between">
                <div className="flex gap-1 opacity-60">
                    <FaUserTie />
                    <p className="font-bold text-sm">{rank}</p>
                </div>

                <div className="flex gap-1 opacity-60">
                    <HiUsers />
                    <p className="font-bold text-sm">{lesson}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCard
