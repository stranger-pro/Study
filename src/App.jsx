import './App.css'
import Home from './pages/Home'
import {Routes,Route,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
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
import Instructor from './components/core/Dashboard/Instructor';
import OpenRoute from './components/core/auth/OpenRoute'
import PrivateRoute from './components/core/auth/PrivateRoute'
import Error from './pages/Error'
import { ACCOUNT_TYPE } from "./utils/constant"

 function App() {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
  
  return (
    <div className='w-screen min-h-screen  flex flex-col font-inter'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/catalog/:catalogName" element={<Catalog/>} />
        
        <Route path="/forgetPassword" element={<OpenRoute><ForgotPassword/></OpenRoute>} />
        <Route path="/update-password/:token" element={<OpenRoute><UpdatePassword/></OpenRoute>}/>
        <Route path="/signUp" element={<OpenRoute><SignUp/></OpenRoute>} />
        <Route path="/logIn" element={<OpenRoute><LogIn/></OpenRoute>} />
        <Route path='/verifyEmail' element={<OpenRoute><VerifyEmail/></OpenRoute>} />

        <Route element={<PrivateRoute><Dashboard/></PrivateRoute>} >
          <Route path='/dashboard/myprofile' element={<MyProfile/>} />
          <Route path='/dashboard/settings' element={<Setting/>} />
          
           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses/>} />
              <Route path='/dashboard/cart' element={<Cart/>} />
            </>
           )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
            <Route path='/dashboard/my-courses' element={<MyCourses/>} />
            <Route path='/dashboard/add-course' element={<CourseAdd/>} />
            <Route path="dashboard/edit-course/:courseId" element={<EditCourse />}/>
            <Route path="dashboard/instructor" element={<Instructor/>}/>
            </>
          )}
          
        </Route>

        <Route path="courses/:courseId" element={<PrivateRoute><CourseDetails /></PrivateRoute>} />
        <Route element={ <PrivateRoute><ViewCourse /></PrivateRoute>}>
              <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />} /> 
        </Route>

        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App;