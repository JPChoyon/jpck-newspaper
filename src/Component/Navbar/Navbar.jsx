import { Link, NavLink } from "react-router-dom";
import userLogo from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { getAuth } from "firebase/auth";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
    .catch()
  }
  const navItem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );
  return (
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
            {navItem}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>

      <div className="navbar-end">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userLogo} />
          </div>
        </div>
        {user ? (
          <button onClick={handleLogout}  className="btn btn-sm  btn-ghost">Log Out</button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
