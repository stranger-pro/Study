import React from 'react'
import CTAButton from './CTAButton'
import HighlightText from './HighlightText'
import img1 from '../../../assets/Images/Compare_with_others.png'
import img2 from '../../../assets/Images/Know_your_progress.png'
import img3 from '../../../assets/Images/Plan_your_lessons.svg'

const LearningLanguageHome = () => {
  return (
    <div className='w-full flex flex-col justify-center py-15'>
      <div className='mx-auto  w-full sm:w-[80%] '>{/* Top */}
        <div className='text-2xl font-bold text-justify xs:text-center'>Your swiss knife for <HighlightText text={" learning any language"} /></div>
        <p className='text-[0.8rem] text-justify xs:text-center md:w-[80%] lg:w-[65%] mx-auto opacity-80 mt-2'>Using spin making learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule and more.</p>
      </div>
      <div className='w-full sm:w-145 md:w-154 lg:w-209 flex flex-col sm:flex-row overflow-x-hidden mx-auto relative sm:my-6'>{/* Middle */}
        <img className='sm:absolute z-0 sm:left-0 mx-auto sm:mx-0 md:left-6 lg:left-5 w-[80%] sm:w-[40%] translate-y-14 sm:translate-y-0' src={img2}/>
        <img className='sm:relative z-1 sm:left-45 md:left-50 lg:left-70 mx-auto sm:mx-0 w-[80%] sm:w-[40%]' src={img1}/>
        <img className='sm:absolute z-2 sm:right-0 md:right-0 lg:-right-5 mx-auto sm:mx-0 w-[80%] sm:w-[40%] -translate-y-16 xs:-translate-y-25 sm:translate-y-0' src={img3}/>
      </div>
      <div className='mx-auto w-fit'>{/* Buttom */}
            <CTAButton path={"/signUp"} active={true}>Learn More</CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageHome
