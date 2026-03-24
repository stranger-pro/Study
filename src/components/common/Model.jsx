import React from 'react'

const Model = ({data}) => {
  console.log(data)
  return (
    
    <div className="fixed inset-0 z-1000 mt-0! grid place-items-center overflow-auto bg-white/5 backdrop-blur-sm">
        <div className="w-11/12 max-w-87.5 rounded-lg border border-richblack-400 bg-richblack-800 p-6">
            <h1 className="text-2xl font-semibold text-richblack-5">{data?.text1}</h1>

            <p className="mt-3 mb-5 leading-6 text-richblack-200">{data?.text2}</p>

            <div className='flex gap-5'>
                <button className="cursor-pointer rounded-md bg-richblack-200 py-2 px-5 font-semibold text-richblack-900" onClick={data?.buttonHandler1}>{data?.btn1Text?data?.btn1Text:"Logout"}</button>
                <button className="cursor-pointer rounded-md bg-richblack-200 py-2 px-5 font-semibold text-richblack-900" onClick={data?.buttonHandler2}>Cancle</button>
            </div>
        </div>
      
    </div>
  )
}

export default Model
