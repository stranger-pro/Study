import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../src/utils/dateFormatter"
import IconBtn from "../components/common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-14 text-2xl xd:text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border border-richblack-700 bg-richblack-800 p-4 xd:p-8 px-6 xd:px-12">
        <div className="flex items-center gap-x-12  md:gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square hidden md:block md:w-13 xm:w-15 lg:w-19.5 rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className=" text-[0.8rem] xs:text-[1rem] xm:text-[1.2rem] lg:text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-[0.5rem] xs:text-[0.65rem] xm:text-[0.75rem] lg:text-[1rem] text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <div className="">
          <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <div className="text-[0.85rem] xd:text-[1rem]"><RiEditBoxLine /></div>
        </IconBtn>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border border-richblack-700 bg-richblack-800 p-4 xd:p-8 px-6 xd:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border border-richblack-700 bg-richblack-800 p-4 xd:p-8 px-6 xd:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-[1rem] xm:text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="grid grid-cols-1 xd:grid-cols-2 xd:gap-17 xm:gap-25   max-w-125 ">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="xd:mb-2 text-[1rem] xd:text-[0.75rem] xm:text-sm text-richblack-600">First Name</p>
              <p className="text-[1rem] xd:text-[0.75rem] xm:text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="xd:mb-2 text-[1rem] xd:text-[0.75rem] xm:text-sm text-richblack-600">Email</p>
              <p className="text-[0.9rem] xs:text-[1rem]  xd:text-[0.6rem] mx:text-[0.65rem] xm:text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="xd:mb-2 text-[1rem] xd:text-[0.75rem] xm:text-sm text-richblack-600">Gender</p>
              <p className="text-[1rem] xd:text-[0.75rem] xm:text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="xd:mb-2 text-[1rem] xd:text-[0.75rem] xm:text-sm text-richblack-600">Last Name</p>
              <p className="text-[1rem] xd:text-[0.75rem] xm:text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="xd:mb-2 text-[1rem] xd:text-[0.75rem] xm:text-sm text-richblack-600">Phone Number</p>
              <p className="text-[1rem] xd:text-[0.75rem] xm:text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="xd:mb-2 text-[1rem] xd:text-[0.75rem] xm:text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-[1rem] xd:text-[0.75rem] xm:text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
