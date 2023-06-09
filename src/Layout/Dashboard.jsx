import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container";
import { FaShoppingCart } from "react-icons/fa";
import { FcPaid } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import useTitle from "../Hooks/useTitle";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  useTitle("Dashboard");

  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <Container>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="mb-16">
              <h2 className="text-center tracking-widest text-orange-400 text-3xl font-bold uppercase">
                Creative
              </h2>
              <p className="text-center text-orange-400 font-semibold text-xl uppercase tracking-widest">
                Connotations
              </p>
            </div>

            {isAdmin ? (
              <>
                <li className="text-white mb-5 text-2xl font-bold text-center">
                  Admin Home
                </li>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <SiGoogleclassroom></SiGoogleclassroom>Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageuser">
                    <HiUserGroup></HiUserGroup>Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li className="text-white mb-5 text-2xl font-bold text-center">
                Instructor Home
                </li>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <FaShoppingCart></FaShoppingCart>Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclasses">
                    <FcPaid></FcPaid>My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="text-white mb-5 text-2xl font-bold text-center">
                  Student Home
                </li>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <FaShoppingCart></FaShoppingCart>My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrollclass">
                    <FcPaid></FcPaid>My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <MdPayment></MdPayment>Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <AiFillHome></AiFillHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <SiGoogleclassroom></SiGoogleclassroom>Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">
                <GiTeacher></GiTeacher>Instructors
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
