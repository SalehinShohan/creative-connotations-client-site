import { Link, Outlet } from "react-router-dom";
import Container from "../components/Container";
import { FaShoppingCart } from "react-icons/fa";
import { FcPaid } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";

const Dashboard = () => {
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
            {/* Sidebar content here */}
            <li>
              <Link>
                {" "}
                <FaShoppingCart></FaShoppingCart>My Selected Classes
              </Link>
            </li>
            <li>
              <Link>
                <FcPaid></FcPaid>My Enrolled Classes
              </Link>
            </li>
            <li>
              <Link>
                <MdPayment></MdPayment>Payment History
              </Link>
            </li>

            <div className="divider"></div>

            <li>
              <Link to='/'>
                <AiFillHome></AiFillHome>Home
              </Link>
            </li>
            <li>
              <Link to='/classes'>
                <SiGoogleclassroom></SiGoogleclassroom>Classes
              </Link>
            </li>
            <li>
              <Link to='/instructors'>
                <GiTeacher></GiTeacher>Instructors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
