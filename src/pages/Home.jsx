import { Link } from "react-router-dom"
import { HiArrowSmRight } from "react-icons/hi";
import HighlightText from "../components/core/home/HighlightText"
import CTAButton from "../components/core/home/CTAButton"
import videoToPlay from '../assets/Images/banner.mp4'
import { TypeAnimation } from 'react-type-animation'
import cover from '../assets/Images/bghome.svg'
import HomeTimeline from "../components/core/home/HomeTimeline";
import Logo1 from '../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../assets/TimeLineLogo/Logo4.svg'
import Timelineimg from '../assets/Images/TimelineImage.png'
import LearningLanguageHome from "../components/core/home/LearningLanguageHome";
import BecomeInstructorHome from "../components/core/home/BecomeInstructorHome";
import CardHomeContainer from "../components/core/home/CardHomeContainer";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="bg-richblack-900">

      {/* Section 1 */}

      <section className=" relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between text-white">

        <Link to={"/signUp"}>
            <div className="mx-auto flex gap-1.5 items-center bg-richblack-800 font-bold text-richblack-200 
              rounded-full transition-all duration-200 hover:scale-95 mt-16 px-3 py-2 ">
              <div >
                  <p>Become an Instructor</p>
              </div>
              <HiArrowSmRight />
            </div>
        </Link>

        <div className="text-3xl text-center font-semibold mt-5">
            Empower Your Future With <HighlightText text={"Coding Skill"} />
        </div>

        <div className="mt-4 w-[95%] md:w-[80%]  text-lg font-bold sm:mx-auto sm:text-justify md:text-center text-richblack-300">
          with our online coding courses, you can learn at your own pace, from anywhere in the world, and
          get access to a wealth of resources, including hands-on project, quizzes, and personalized feedback from instructors.
        </div>
        
        <div className="flex gap-7 mt-8 flex-row">
          <CTAButton path={"/signUp"} active={true}>Learn More</CTAButton>
          <CTAButton path={"/logIn"} active={false}>Book A Demo</CTAButton>
        </div>

        <div className="relative w-[95%] md:w-[80%]  m-12">
          <div className="absolute z-0 top-15 left-45 md:top-35 md:left-95  lg:top-35 lg:left-110 md:w-75 h-50 w-50 md:h-75 bg-cyan-500 opacity-50 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="relative z-10 mx-auto">
            <video muted loop autoPlay>
            <source src={videoToPlay} />
          </video>
          </div>
        </div>

        <div className="w-[95%] md:w-[80%]  flex flex-col md:flex-row mt-15 gap-8 md:justify-between"> {/* box */}

          <div className="relative mx-auto md:mx-0 w-[95%] sm:w-[85%] md:w-[47%] gap-3 flex flex-row bg-richblue-500/12 border border-richblack-500/5 z-0 rounded-lg p-4" >{/* left */}
          <div className="absolute -z-1  top-25 left-50 w-60 h-45 bg-cyan-500 opacity-30 md:opacity-50 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 "></div>
          
            <div className="w-[10%] flex flex-col justify-between gap-1.3">{/* number */}
              <p className="flex items-center justify-center opacity-30">1</p>
              <p className="flex items-center justify-center opacity-30">2</p>
              <p className="flex items-center justify-center opacity-30">3</p>
              <p className="flex items-center justify-center opacity-30">4</p>
              <p className="flex items-center justify-center opacity-30">5</p>
              <p className="flex items-center justify-center opacity-30">6</p>
              <p className="flex items-center justify-center opacity-30">7</p>
              <p className="flex items-center justify-center opacity-30">8</p>
              <p className="flex items-center justify-center opacity-30">9</p>
              <p className="flex items-center justify-center opacity-30">10</p>
              <p className="flex items-center justify-center opacity-30">11</p>
            </div>
            <div className="w-[90%] flex flex-col justify-between ">{/* animation */}
              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<!DOCTYPE html>',
                  5000,
                  '<!DOCTYPE html>',
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                style={{ fontSize: '0.8rem',color:"yellow", display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>
              
              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<html>',
                  
                  5000,
                  '<html>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<head>',
                  
                  5000,
                  '<head>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<title>Example</title>',
                  
                  5000,
                  '<title>Example</title>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<link rel="stylesheet" href="styles.css">',
              
                  5000,
                  '<link rel="stylesheet" href="styles.css">',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem',color:"red", display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '</head>',
                  
                  5000,
                  '</head>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<body>',
                
                  5000,
                  '<body>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<h1><a href="/">Header</a></h1>',
                  
                  5000,
                  '<h1><a href="/">Header</a></h1>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<nav><a href="one/">One</a>',
                  
                  5000,
                  '<nav><a href="one/">One</a>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '<a href="Two/">Two</a>',
                 
                  5000,
                  '<a href="Two/">Two</a>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              <div>
                <TypeAnimation className="flex items-center justify-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '</nav>',
                  5000, // wait 1s before replacing "Mice" with "Hamsters"
                  
                  '</nav>',
                ]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.9rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

            </div>
          </div>
          <div className="mx-auto md:mx-0 w-[95%] sm:w-[85%] md:w-[45%] flex flex-col md:justify-evenly">{/* right */}
            <div className="text-3xl">Start <HighlightText text={"Coding In Seconds"}/></div>

            <p className="text-md pb-7 pt-3 md:pb-0 md:pt=0 opacity-40 text-justify">Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
            </p>

            <div className=" w-full flex text-sm font-light">
                <div className=" flex flex-row  gap-4">
                <CTAButton  active={true} path={"/signUp"}>Continue Lesson</CTAButton>
                <CTAButton active={false} path={"/signUp"}>Learn More</CTAButton>
                </div>
            </div>
          </div>
        </div>

        <div className="w-[95%] md:w-[80%] gap-1 md:gap-0 flex mx-auto flex-col mt-15 items-center">{/* text */}
            <div className="text-[1.7rem] xs:text-[2.15rem] text-center font-semibold mt-5">Unlock the <HighlightText text={"Power of Code"} /></div>
            <span className="text-sm opacity-30 my-2">Learn to Build Anything You Can Imagine</span>
        </div>


      </section>

      {/* Section 2 */}
      <section className=" bg-white " >
        <div  className="relative w-full" style={{background:`url(${cover})`}} >

          <div className="relative mt-45 -top-39 w-[95%] md:w-[87%] mx-auto">
            <CardHomeContainer/>
          </div>
          
        </div>
      </section>


      {/* Section 3  bg-white */}
      <section className="bg-white w-full">
        <div className="w-[90%] md:w-[80%] flex md:flex-row flex-col mx-auto justify-between mb-10">{/* text */}
            <div className="w-90% sm:w-[75%] md:w-[46%] mt-12 mx-auto md:mx-0">{/*  bold text */}
                <div className="text-3xl font-bold">
                  Get the skills you need for a<HighlightText text={" job that is in demand."}/>
                </div>
            </div>
            <div className="w-90% sm:w-[75%] md:w-[45%] mx-auto md:mx-0 mt-6 md:mt-12">{/* p text */}
                <p  className="mb-5 text-sm opacity-85">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                <div className="w-fit"><CTAButton active={true} path={"/signUp"}>Learn More</CTAButton></div>
            </div>
        </div>

        <div className="w-[90%] md:w-[80%] flex md:flex-row gap-14 md:gap-0 flex-col mx-auto md:justify-between relative"> {/* timeline */}
          <div className=" w-[90%] xs:w-[70%] mx-auto md:mx-0 md:w-[40%] flex flex-col gap-6 lg:gap-10 md:ml-4 my-auto">
            <HomeTimeline img={Logo1} title={'Leadership'} para={"Fully committed to the success company"} />
            <HomeTimeline img={Logo2} title={'Responsibility'} para={"Students will always be our top priority"} />
            <HomeTimeline img={Logo3} title={'Flexibility'} para={"The ability to switch is an important skills"} />
            <HomeTimeline img={Logo4} title={'Solve the problem'} para={"Code your way to a solution"} />
          </div>
          <div className="relative my-0 md:my-auto w-full md:w-[50%] mb-12">

                <div className="relative ">
                  <div className="absolute inset-0 z-0  top-40 left-70 w-60 h-45 bg-cyan-500 opacity-90 blur-[120px] rounded-full  "></div> {/* gradient */}
                  <img className=" relative z-0  shadow-[12px_12px_rgba(256,256,256,0.6)]" src={Timelineimg} />
                  <div className="absolute p-4 items-center w-[80%] mx-auto flex bg-caribbeangreen-700 z-10 justify-between -bottom-10 left-10 xs:left-15 md:left-8 lg:left-15">{/* cover */}
                    <div className="flex gap-1.5 lg:gap-3 items-center w-[50%]"> {/* left */}
                      <div className="text-xl lg:text-2xl font-bold text-white p-1.5 lg:p-3">10</div>
                      <div className=" border-r-caribbeangreen-500 border-r-2 w-[90%]">
                        <p className="text-[0.5rem] lg:text-[0.70rem]  text-caribbeangreen-400 font-bold">YEARS</p>
                        <p className="text-[0.5rem] lg:text-[0.70rem]  text-caribbeangreen-400 font-bold"> EXPERIENCES</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[45%]  gap-2">{/* right */}
                      <div className="text-xl lg:text-2xl font-bold text-white p-1.5 lg:p-3">250</div>
                      <div className=" w-[90%] p-2">
                        <div className="text-[0.5rem] lg:text-[0.70rem]  text-caribbeangreen-400 font-bold">TYPES OF</div>
                        <div className="text-[0.5rem] lg:text-[0.70rem]  text-caribbeangreen-400 font-bold">COURSES</div>
                      </div>
                    </div> 
                  </div>
                  
                </div>
          </div>
  
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto mt-15" >
            <LearningLanguageHome/>
        </div>
      </section>
      
      {/* Section 4 bg-black */}
      <section className="w-full">
        <div className="w-[95%] md:w-[80%] mx-auto">
          <BecomeInstructorHome/>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-richblack-800">
            <div className="w-full mx-auto">
              <Footer/>
            </div>
      </footer>

    </div>
  )
}

export default Home
