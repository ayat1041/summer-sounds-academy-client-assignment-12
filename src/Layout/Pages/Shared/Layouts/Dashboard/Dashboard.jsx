import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiLogOut } from 'react-icons/bi'
import { FaSchool } from 'react-icons/fa'
import "./Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
const Dashboard = () => {
  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const userLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
    }
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <ul className="hidden lg:block menu bar_parent_shape absolute bg-[#c1ff15] w-full h-full"></ul>
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-green-400 text-base-content bar_shape">
      {/* Sidebar content here */}
      <div>
        {
          user && (
            <>
            <h2 className="px-8 text-2xl uppercase drop-shadow-sm text-slate-50 font-bold tracking-wider mt-8">{user.displayName}</h2>
            </>
            )
        }
      </div>
      <div className="divider text-red-600 my-8 mx-4 mr-14"></div>
      <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md"><NavLink to="mySelectedClasses" className="text-white hover:text-white mx-auto">My Selected Classes</NavLink></li>
      <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md"><NavLink to="myEnrolledClasses" className="text-white hover:text-white mx-auto">My Enrolled Classes</NavLink></li>
      <li className="p-2 py-1 my-1 ml-4 bg-[#0000003a] hover:bg-[#00000099] w-[220px] text-lg font-medium rounded-md"><NavLink to="paymentHistory" className="text-white hover:text-white mx-auto">Payment History</NavLink></li>
      <div className="divider text-red-600 my-8 mx-4 mr-10"></div>
      <div className="p-4 flex flex-col gap-3">
        <Link to="/" className="flex items-center cursor-pointer"><FaSchool className="ml-1 text-xl"/><p className="mx-2 text-lg font-medium">Back to school</p></Link>
        <div onClick={userLogOut} className="flex items-center cursor-pointer"><BiLogOut className="text-2xl"/><p className="mx-2 text-lg font-medium">LogOut</p></div>
      </div>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
