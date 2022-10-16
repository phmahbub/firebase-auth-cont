import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/header" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="flex justify-content-between">
          <div className="flex-1">
            <Link to="/login" className="btn btn-ghost normal-case text-xl">
              Login
            </Link>
          </div>

          <div className="flex-1">
            <Link to="/signup" className="btn btn-ghost normal-case text-xl">
             Signup
            </Link>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
           <p className="normal-case text-xl font-semibold text-primary">User Name</p>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
