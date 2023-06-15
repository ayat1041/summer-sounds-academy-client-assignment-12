import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import { GiDandelionFlower } from "react-icons/gi";
import { DarkModeContext } from "../../../../../Providers/DarkModeProvider";
import useUserEmail from "../../../../../Hooks/useUserEmail";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { users, isUserLoading } = useUserEmail(user?.email);
  // useEffect(()=>{
  //   if(isUserLoading){

  //   }
  // },[user,users])

  const { darkModeState, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const userLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const [darkMode, setDarkMode] = useState(darkModeState);
  // const darkModeStateValue = !darkMode;
  useEffect(() => {
    toggleDarkMode();
  }, [darkMode]);
  const listItems = (
    <>
      <li
        className={`font-semibold hover:text-base transition-all duration-100 ease-in ${
          darkModeState ? "text-slate-900" : "text-green-200"
        }`}
      >
        <Link to="/" className="tracking-wider drop-shadow-sm">
          Home
        </Link>
      </li>
      <li
        className={`font-semibold hover:text-base transition-all duration-100 ease-in ${
          darkModeState ? "text-slate-900" : "text-green-200"
        }`}
      >
        <Link to="/instructors" className="tracking-wider drop-shadow-sm">
          Instructors
        </Link>
      </li>
      <li
        className={`font-semibold hover:text-base transition-all duration-100 ease-in ${
          darkModeState ? "text-slate-900" : "text-green-200"
        }`}
      >
        <Link to="/classes" className="tracking-wider drop-shadow-sm">
          Classes
        </Link>
      </li>
    </>
  );

  return (
    <div className="">
      {/* <div className={`bg-green-200 py-1 pt-2 flex justify-between lg:px-8`}> */}
      <div
        className={`py-1 pt-2 flex justify-between transition-all duration-200 ease-in lg:px-8 ${
          darkModeState ? "bg-green-200" : "bg-green-900"
        }`}
      >
        {/* <img src="logo.png" className="h-10 lg:h-14 mx-auto lg:mx-0 shadow-md" alt="" /> */}
        <div
          className="h-10 lg:h-14 mx-2 lg:mx-0 drop-shadow-md flex items-center pb-2"
          alt=""
        >
          <GiDandelionFlower className="text-yellow-400 text-3xl lg:text-5xl" />
          <div className="divider-vertical mx-2 w-[1px] bg-slate-400 h-full"></div>
          <div className="mt-2 lg:mt-0">
            <h1
              className={`text-lg lg:text-4xl text-blue-200 tracking-tight leading-none font-medium -mb-1 ${
                darkModeState ? "text-green-900" : "text-green-200"
              }`}
              style={{ fontFamily: "'PT Sans Narrow', sans-serif" }}
            >
              Summer Sounds Academy
            </h1>
            <h1
              className={`m-0 mt-2 lg:mt-1 text-[7px] lg:text-sm tracking-tighter lg:tracking-tight ${
                darkModeState ? "text-green-900" : "text-yellow-600"
              }`}
            >
              learn to play instruments | Enjoy a creative vacation
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <label className="swap swap-rotate text-blue-950">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)} // <-- Update the state on checkbox change
            />
            {/* sun icon */}
            <svg
              className="swap-on fill-yellow-500 drop-shadow-md w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-slate-300 w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user && (
            <h1 className="btn btn-xs mx-2 text-xs">{user?.displayName}</h1>
          )}
          <button
            className={`btn text-white border-none hidden lg:block hover:bg-slate-600 ${
              darkModeState ? "bg-green-500" : "bg-green-700"
            }`}
          >
            Take a Tour
          </button>
        </div>
      </div>
      <div
        className={`navbar sticky top-0 w-full h-10 shadow-md z-10 transition-all duration-300 ease-in ${
          darkModeState ? "bg-green-400" : "bg-green-700"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-green-200 rounded-sm w-52"
            >
              {listItems}
            </ul>
          </div>
          {user && (
            <>
              {users[0]?.role === "student" && (
                <Link to="/dashboard/mySelectedClasses" className={`btn border-none text-slate-100 tracking-wide hover:bg-slate-700 normal-case text-xl ${
                  darkModeState ? "bg-green-500" : "bg-green-800"
                }`}>
                  Dashboard
                </Link>
              )}
              {users[0]?.role === "instructor" && (
                <Link to="/dashboard/addAClass" className={`btn border-none text-slate-100 tracking-wide hover:bg-slate-700 normal-case text-xl ${
                  darkModeState ? "bg-green-500" : "bg-green-800"
                }`}>
                  Dashboard
                </Link>
              )}
              {users[0]?.role === "admin" && (
                <Link
                  to="/dashboard/manageClasses"
                  className={`btn border-none text-slate-100 tracking-wide hover:bg-slate-700 normal-case text-xl ${
                    darkModeState ? "bg-green-500" : "bg-green-800"
                  }`}
                >
                  Dashboard
                </Link>
              )}
            </>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 w-72 h-14 flex justify-between">
            {listItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar online mx-4">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button onClick={userLogOut} className="btn rounded-md">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
