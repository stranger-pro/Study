import React from 'react'
import img1 from '../../../assets/Images/Instructor.png'
import { HiArrowSmRight } from "react-icons/hi";
import CTAButton from './CTAButton'
import HighlightText from './HighlightText'

const BecomeInstructorHome = () => {
  return (
    <div className='my-15 flex flex-col sm:flex-row'>
        <div className='sm:w-[45%] sm:ml-8 my-auto mx-auto w-[80%] sm:mx-0'> {/* Left */}
            <img className='shadow-[-12px_-12px_rgba(255,255,255)] ' src={img1} />
        </div>

        <div className='text-white mt-6 sm:mt-0 my-auto pl-15 sm:w-[65%] mx-auto w-full sm:mx-auto'> {/* Right */}
            <div className='text-2xl flex gap-2.5 sm:gap-0 sm:flex-col font-bold'>
                Become an 
                <p><HighlightText text={"instructor"} /></p>
            </div>
                
            <div className=' mb-10 mt-3 w-[80%] sm:w-[68%]'>
                <p className='text-[0.9rem] opacity-50'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            </div>

            <div className='w-fit text-[0.9rem]'>
                <CTAButton path={"/signUp"} active={true}>Start Teaching Today <HiArrowSmRight/></CTAButton>
            </div>
        </div>
      
    </div>
  )
}

export default BecomeInstructorHome
