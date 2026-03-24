import React from 'react'
import { FaCheck } from "react-icons/fa"
import { useSelector } from 'react-redux'
import CourseInformationForm from './CourseInformation/CourseInformationForm';
import CourseBuilderForm from './CourseBuilder/CourseBuilderForm';
import PublishCourse from './PublishCourse';

const Rendersteps = () => {

    const step = useSelector((state) => state.course.step);
    const steps = [
        {
            id:1,
            title:"Course Information",
        },
        {
            id:2,
            title: "Course Builder"
        },
        {
            id:3,
            title:"Publish"
        }
    ]

    
  return (
    <div className='w-full flex flex-col gap-3'>
        <div className='flex  justify-evenly '>
            {
            steps.map((item,key) => (
            <div className='flex' key={key}>
                <div className='flex '>
                    <div className='flex flex-col gap-2'>
                        <div className={`${item.id <= step ? "bg-yellow-900 border-yellow-50 text-yellow-50" 
                                : "border-r-richblack-700 bg-richblack-800 text-richblack-300" } text-2xl w-10
                                flex items-center justify-center mx-auto py-1 rounded-full px-4`}>
                
                        {
                            item.id<step ? <p className='text-[1rem] py-2'><FaCheck/></p> : (item.id)
                        }

                        </div>

                        <div className='text-[0.9rem] '>{item.title}</div>
                    </div>
                    
                </div>

                <div className='flex items-center h-[70%]'>
                {
                    (item.id !== steps.length) && (<hr className={`${item.id <step ? " text-yellow-25" : "text-richblack-200"} h-3 w-17 border-dotted`}></hr>)
                }
                </div>

            </div>
                
            ))

       
        }
        
        </div>
        
        <div>
            {step == 1 && <CourseInformationForm/>}
            {step === 2 && <CourseBuilderForm />}
            {step === 3 && <PublishCourse />}
        </div>
    </div>
  )
}

export default Rendersteps
