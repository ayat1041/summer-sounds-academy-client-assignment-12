import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiLogOut,BiSelectMultiple } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { MdLibraryBooks,MdManageSearch,MdManageAccounts } from "react-icons/md";
import "./Dashboard.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import useUserEmail from "../../../../../Hooks/useUserEmail";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const { users, isUserLoading } = useUserEmail(user?.email);

  const navigate = useNavigate();
  const userLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <NavBar></NavBar>
      <label
        htmlFor="my-drawer-2"
        className="btn btn-success drawer-button lg:hidden"
      >
        Open drawer
      </label>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center h-max py-24">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <ul className="hidden lg:block menu bar_parent_shape absolute bg-[#c1ff15] w-full h-full"></ul>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-green-400 text-base-content bar_shape">
            {/* Sidebar content here */}
            <div>
              {user && (
                <>
                  <h2 className="px-8 text-2xl uppercase drop-shadow-sm text-slate-50 font-bold tracking-wider mt-8">
                    {user.displayName}
                  </h2>
                </>
              )}
            </div>

            <div className="divider text-red-600 my-8 mx-4 mr-14"></div>

            {isUserLoading ? (
              // Loading indicator
              <div className="w-full text-center">
                <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
              </div>
            ) : users.length > 0 ? (
              // User roles options
              <>
                {users[0]?.role === "student" && (
                  <>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="mySelectedClasses"
                        className="text-white hover:text-white mx-auto text-sm"
                      >
                        <BiSelectMultiple className="text-2xl text-black"/>
                        My Selected Classes
                      </NavLink>
                    </li>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="myEnrolledClasses"
                        className="text-white hover:text-white mx-auto text-sm"
                      >
                        <BsFillBagCheckFill className="text-2xl text-black"/>
                        My Enrolled Classes
                      </NavLink>
                    </li>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="paymentHistory"
                        className="text-white hover:text-white mx-auto text-sm"
                      >
                        <GiCash className="text-2xl text-black"/>
                        Payment History
                      </NavLink>
                    </li>
                  </>
                )}
                {users[0]?.role === "admin" && (
                  <>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="manageClasses"
                        className="text-white hover:text-white mx-auto"
                      >
                        <MdManageSearch className="text-3xl text-black"/>
                        Manage Classes
                      </NavLink>
                    </li>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="manageUsers"
                        className="text-white hover:text-white mx-auto"
                      >
                        <MdManageAccounts className="text-3xl text-black"/>
                        Manage Users
                      </NavLink>
                    </li>
                  </>
                )}
                {users[0]?.role === "instructor" && (
                  <>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="addAClass"
                        className="text-white hover:text-white mx-auto"
                      >
                        <GrAddCircle className="text-3xl" />
                        Add A Class
                      </NavLink>
                    </li>
                    <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md">
                      <NavLink
                        to="myClasses"
                        className="text-white hover:text-white mx-auto"
                      >
                        <MdLibraryBooks className="text-3xl text-black"/>
                        My Classes
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            ) : (
              // Default option if user roles are not matched
              <div className="w-full text-center">
                <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
              </div>
            )}

            <div className="divider text-red-600 my-8 mx-4 mr-10"></div>
            <div className="p-4 flex flex-col gap-3">
              <Link to="/" className="flex items-center cursor-pointer">
                <FaSchool className="ml-1 text-xl" />
                <p className="mx-2 text-lg font-medium">Back to school</p>
              </Link>
              <div
                onClick={userLogOut}
                className="flex items-center cursor-pointer"
              >
                <BiLogOut className="text-2xl" />
                <p className="mx-2 text-lg font-medium">LogOut</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
