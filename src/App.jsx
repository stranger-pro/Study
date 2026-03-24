import './App.css'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';
import Navbar from './components/common/Navbar';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/updatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import EnrolledCourses from './pages/EnrolledCourses';
import Setting from './pages/Setting';
import Cart from './components/core/Dashboard/Cart/index';
import MyCourses from './components/core/Dashboard/MyCourses';
import CourseAdd from './components/core/Dashboard/AddCourse/CourseAdd';
import EditCourse from './components/core/Dashboard/EditCourse';
import Catalog from './pages/Catalog';
import CourseDetails from './pages/CourseDetails';
import VideoDetails from './components/core/ViewCourse/VideoDetails';
import ViewCourse from './pages/ViewCourse';
import InstructorChart from './components/core/Dashboard/InstructorDashboard/InstructorChart';
import Instructor from './components/core/Dashboard/Instructor';


 function App() {
  return (
    <div className='w-screen min-h-screen  flex flex-col font-inter'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="/catalog/:catalogName" element={<Catalog/>} />
        <Route path="/forgetPassword" element={<ForgotPassword/>} />
        <Route path="/update-password/:token" element={<UpdatePassword/>}/>
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path='/verifyEmail' element={<VerifyEmail/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

        <Route element={<Dashboard/>} >
          <Route path='/dashboard/myprofile' element={<MyProfile/>} />
          <Route path='/dashboard/settings' element={<Setting/>} />
          <Route path='/dashboard/my-courses' element={<MyCourses/>} />
          
          <Route path='/dashboard/add-course' element={<CourseAdd/>} />
          <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses/>} />
          <Route path='/dashboard/cart' element={<Cart/>} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />}/>
          <Route path="dashboard/instructor" element={<Instructor/>}/>
        </Route>

        <Route element={ <ViewCourse /> }>
              <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />} /> 
        </Route>
      </Routes>
    </div>
  )
}


// myCourse instructer coursetable
// cart payment loading 
export default App;