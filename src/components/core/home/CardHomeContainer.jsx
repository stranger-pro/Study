import { useState } from 'react'
import HomeCard from "./HomeCard";
import {HomePageExplore} from '../../../data/homepage-explore'
import CTAButton from './CTAButton';

const CardHomeContainer = () => {

    const buttons = ['Free','New to coding','Most popular','Skills paths','Career paths'];
    const [currTab,setCurrTab] = useState(buttons[0]);
    const [currCourse, setCurrCourse] = useState(HomePageExplore[0].courses);

    const setValues = (value) => {
        setCurrTab(value);
        const courseDetail = HomePageExplore.filter((values) => values.tag === value);
        const course = courseDetail[0].courses;
        setCurrCourse(course);
    }

  return (
    <div className='mx-auto w-full'>
        <div className='md:flex hidden w-fit mx-auto items-center p-2 px-4 py-1 rounded-full gap-4 bg-richblack-800'>{/* head */}
            {
                buttons.map((button,i) => (<p onClick={() => setValues(button)} key={i}
                className={`text-[16px] ${currTab=== button ? 'text-richblack-5 font-medium bg-richblack-900':
                'text-richblack-200'} rounded-full transition-all duration-200 cursor-pointer
                 hover:bg-richblack-900 hover:scale-95 px-4 hover:text-richblack-200 p-2`}
                >{button}</p>))
            }
        </div>

        <div className='flex w-full  flex-wrap justify-between gap-4 px-5 py-15 md:p-15'>{/* card */}
            
            {
                currCourse.map((course,i) => {
                    return (
                        <div key={i} className="w-[85%] xs:w-65 mx-auto">
                        <HomeCard heading={course.heading} desc={course.description} rank={course.level} lesson={course.lessionNumber}/>
                        </div>
                    )
                })
            }

        </div>

        <div className='flex justify-center gap-4'>
            <CTAButton className="w-fit" path={"/signUp"} active={true}>Explore Full Catalog</CTAButton>
            <CTAButton className="w-fit" path={"/logIn"} active={false}>Learn More</CTAButton>
        </div>
      
    </div>
  )
}

export default CardHomeContainer
