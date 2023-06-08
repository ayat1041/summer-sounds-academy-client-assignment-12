import { Link } from 'react-router-dom';
const NavBar = () => {
  const listItems = (
    <>
      <li className="font-semibold hover:text-base text-slate-950 transition-all duration-100 ease-in">
        <Link to="/" className="tracking-wider drop-shadow-sm">Home</Link>
      </li>
      <li className="font-semibold hover:text-base text-slate-950 transition-all duration-100 ease-in">
        <Link to="/instructors" className="tracking-wider drop-shadow-sm">Instructors</Link>
      </li>
      <li className="font-semibold hover:text-base text-slate-950 transition-all duration-100 ease-in">
        <Link to="/classes" className="tracking-wider drop-shadow-sm">Classes</Link>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="bg-green-200 py-1 pt-2 flex justify-between lg:px-8">
        <img src="logo.png" className="h-10 lg:h-14 mx-auto lg:mx-0" alt="" />
        <button className="btn bg-green-500 text-white border-none hidden lg:block hover:bg-slate-600">Take a Tour</button>
      </div>
      <div className="navbar bg-green-400 sticky top-0 w-full h-10">
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
          <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 w-72 h-14 flex justify-between">{listItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-md">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
