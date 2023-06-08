import { Link, NavLink } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/images/logo1.png";
import useTitle from "../Hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  useTitle("Instructors");

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <Link to="/">
          {" "}
          <button className="btn btn-xs">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-accent">+0</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <Link
            onClick={handleLogOut}
            className="px-4 flex transition font-semibold cursor-pointer">
            Logout
          </Link>
          {user && (
            <div
              className="ml-2 tooltip tooltip-bottom"
              data-tip={user?.displayName}>
              <img className="w-8 h-8 rounded-lg" src={user?.photoURL} alt="" />
            </div>
          )}
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>{" "}
        </>
      )}
    </>
  );

  return (
    <Container>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl h-10 bg-black shadow-lg text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link>
            {" "}
            <img src={logo} alt="" />{" "}
          </Link>
        </div>
        <div className="navbar-end font-semibold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
