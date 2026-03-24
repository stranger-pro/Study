import Rendersteps from './Rendersteps'

const CourseAdd = () => {
  return (
    <div className='flex mx-auto w-full gap-3'>
        <div className='w-[60%] text-richblack-200'>
            <div>Add Course</div>
            <div>
                <Rendersteps/>
            </div>
        </div>
        <div className="sticky top-10 hidden w-[40%] flex-1 rounded-md border border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
    </div>
  )
}

export default CourseAdd
