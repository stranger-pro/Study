import { NavbarLinks } from "../../data/navbar-links";
import img from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropdown from "../core/auth/ProfileDropdown";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { categories} from "../../services/apis";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [category, setCategory] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const matchname = (path) => {
    return matchPath({ path: path }, location.pathname);
  };

  const fetchCategory = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API,null,{Authorization:`Bearer ${token}`},null);
      setCategory(result.data.allCategory);
    } catch (e) {
      console.log("error while feching category", e);
    }
  };

  useEffect(() => {
     fetchCategory();
  }, []);

  return (
    <div className=" w-full h-14 flex justify-center items-center border-2 bg-richblack-900 border-b-richblack-700">
      <div className="w-[80%] flex items-center justify-between">
        {/* right */}
        <Link to={"/"}>
          <img className="h-8" src={img} loading="lazy" />
        </Link>

        {/* Middle */}
        <div className="flex gap-4 font-bold">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              {link.title === "Catalog" ? (
                <>
                  <div className="relative group cursor-pointer text-richblack-200 flex items-center justify-center gap-1 group ">
                    <p>{link.title}</p> <FaChevronDown className="w-[0.7rem]" />
                    
                    
                    <div className="absolute z-10 top-8  text-richblack-900  w-50 invisible
                     bg-white rounded-md   opacity-0 transition-all duration-50 
                     p-4 group-hover:visible group-hover:opacity-100">
                      <div className="absolute -top-1.5 right-14 z-0 h-6 w-6  text-richblack-900 rotate-45 invisible
                       bg-white   opacity-0 transition-all duration-50 
                        group-hover:visible group-hover:opacity-100">
                    </div>

                      <div className="flex p-2 flex-col gap-1">
                        {
                            category?.map((cat,index) => (
                              <Link key={index} to={`catalog/${cat.name}`}>
                                <span>{cat.name}</span>
                              </Link>
                            ))
                        }
                      </div>

                    </div>


                  </div>
                </>
              ) : (
                <Link to={`${link?.path}`}>
                  <p
                    className={`${matchname(link?.path) ? "text-yellow-25" : "text-richblack-200 "}`}
                  >
                    {link.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </div>

        {/* left */}
        <div className="flex gap-3 ">
          {user && user?.accountType != "Instructor" && (
            <Link
              to={"/dashboard/cart"}
              className="relative text-richblack-200 flex items-center justify-center"
            >
              <IoCartOutline className="w-7 h-6" />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {!token && (
            <>
              <Link
                className="text-white text-[0.9rem] font-bold py-2 px-4 text-center border border-richblack-700 rounded-full"
                to={"/signUp"}
              >
                SignUp
              </Link>
              <Link
                className="text-white text-[0.9rem] font-bold py-2 px-4 text-center border border-richblack-700 rounded-full"
                to={"/logIn"}
              >
                LogIn
              </Link>
            </>
          )}

          {token && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
