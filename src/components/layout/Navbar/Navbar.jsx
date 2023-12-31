import { Link, NavLink } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin();

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = user ? (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addArticles">Add Articles</NavLink>
      </li>
      <li>
        <NavLink to="/allArticles">All Articles</NavLink>
      </li>
      {isAdmin && (
        <li>
          <NavLink to="/dashboard/admin">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/myArticle">My Articles</NavLink>
      </li>
      <li>
        <NavLink to="/premiumArticle">Premium Articles</NavLink>
      </li>
      <li>
        <NavLink to="/subscription">Subscription</NavLink>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
<div className="w-full mx-auto bg-base-200 ">
<div className="">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-16"
              src="https://iili.io/JAnC8Wg.png"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-3xl font-bold">
              NEWS<span className="text-red-600">12</span>PAPER
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link to="/profile" className="pr-4">
                <img
                  className="rounded-full w-11 h-11"
                  src={user.photoURL}
                  alt=""
                />
              </Link>
              <span className="pr-4">{user.displayName}</span>
              <button onClick={handleSignOut} className="btn btn-outline ">
                <FaUserCheck></FaUserCheck>Log Out
              </button>
            </>
          ) : (
            <Link to="/signIn">
              <button className="btn btn-outline ">
                <FaUserCheck></FaUserCheck>Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
</div>
  );
};

export default Navbar;
