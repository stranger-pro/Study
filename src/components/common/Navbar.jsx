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
  const [show , setShow] = useState(false);
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
      <div className="w-[90%] xs:w-[80%] flex items-center justify-between">
        {/* right */}
        <Link to={"/"} className="flex">
          {/* <img className="h-4.5 xs:pr-3 xd:pr-0 pr-6 xs:h-5.5 md:h-6 lg:h-8 " src={img} loading="lazy" /> */}
          <span className="h-4.5  text-yellow-5 font-bold text-xl flex items-center justify-center xd:text-2xl xs:h-5.5 md:h-6 lg:h-8 ">S</span>
          <span className="h-4.5 xs:pr-3 text-white font-bold text-xl flex items-center justify-center xd:text-2xl xd:pr-0 pr-6 xs:h-5.5 md:h-6 lg:h-8 ">tudy</span>
        </Link>

        {/* Middle */}
        <ul className="flex gap-4  font-bold">
          {NavbarLinks.map((link, index) => (
            <li className="" key={index}>
              {link.title === "Catalog" ? (
                <>
                  <div  className=" relative group cursor-pointer text-richblack-200 flex items-center justify-center gap-1 group ">
                    <p onClick={() => setShow(!show)} className="lg:text-[1rem] xs:text-[0.8rem]  text-[0.7rem] md:text-[0.9rem]">{link.title}</p> <FaChevronDown className="w-2 xs:w-[0.7rem]" />
                    
                    
                    <div onClick={() => setShow(false)} className={`absolute z-100 top-8  text-richblack-900 w-40 xs:w-50 
                     bg-white rounded-md    transition-all duration-50 
                     p-4 group-hover:visible group-hover:opacity-100
                     ${show ? "visible opacity-100" : "invisible opacity-0"}
                     `}>
                      <div className={`absolute -top-1.5 right-12 xs:right-15 lg:right-14 z-0 h-6 w-6  text-richblack-900 rotate-45 
                       bg-white transition-all duration-50
                       ${show ? "visible opacity-100" : "invisible opacity-0"} 
                        group-hover:visible group-hover:opacity-100`}>
                    </div>

                      <div className="flex py-1  xs:p-2 text-[0.9rem] xs:text-[1.02rem] flex-col gap-1">
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
                    className={`lg:text-[1rem] xs:text-[0.8rem] text-[0.7rem] ${link.title=="About" && "hidden xs:block" } 
                    ${link.title=="Contact" && "hidden xd:block" } md:text-[0.9rem] ${matchname(link?.path) ? "text-yellow-25" : 
                    "text-richblack-200 "}`}
                  >
                    {link.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* left */}
        <div className="flex gap-1.5 xd:gap-2 md:gap-3 ">
          

          {!token && (
            <>
              <Link
                className="text-white lg:text-[0.9rem] md:text-[0.8rem] xs:text-[0.7rem] text-[0.6rem] font-bold py-[0.35rem]  px-1 xd:py-[0.4rem] xd:px-2  md:py-2 h-fit md:px-3 lg:py-[0.68rem] lg:px-4 flex items-center text-center border border-richblack-700 rounded-full"
                to={"/signUp"}
              >
                SignUp
              </Link>
              <Link
                className="text-white lg:text-[0.9rem] md:text-[0.8rem] xs:text-[0.7rem] text-[0.6rem] font-bold py-[0.35rem]  px-1 xd:py-[0.4rem] xd:px-2  md:py-2 h-fit md:px-3 lg:py-[0.68rem] lg:px-4 flex items-center text-center border border-richblack-700 rounded-full"
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
