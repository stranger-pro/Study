const BASE_URL = import.meta.env.VITE_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendOtp", //
  SIGNUP_API: BASE_URL + "/auth/signUp", //
  LOGIN_API: BASE_URL + "/auth/signIn", //
  RESETPASSTOKEN_API: BASE_URL + "/auth/resetPasswordToken", //
  RESETPASSWORD_API: BASE_URL + "/auth/resetPassword", //
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetail", //
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses", //
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard", //
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment", //
}

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/allCourses", //
  COURSE_DETAILS_API: BASE_URL + "/course/getCourse", //
  EDIT_COURSE_API: BASE_URL + "/course/editCourse", //
  COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategory",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse", //
  CREATE_SECTION_API: BASE_URL + "/course/createSection", //
  CREATE_SUBSECTION_API: BASE_URL + "/course/createSubSection", //
  UPDATE_SECTION_API: BASE_URL + "/course/updateSecton", //
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection", //
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses", //
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection", //
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection", //
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse", //
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",//
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress", // Not created
  CREATE_RATING_API: BASE_URL + "/course/createRatingAndReview",//
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/allRating", //
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategory", //
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/findCategory", //
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact", // Not created
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture", //
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile", //
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changePassword", //
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteAccount", //
}
