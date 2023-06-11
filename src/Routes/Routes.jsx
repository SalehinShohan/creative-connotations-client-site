import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Instructors from "../Pages/Instructors ";
import Classes from "../Pages/Classes ";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass";
import InstructorClass from "../Pages/Dashboard/InstructorClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistoyr from "../Pages/Dashboard/PaymentHistoyr";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";
import AdminMangeClass from "../Pages/Dashboard/AdminManageClass/AdminMangeClass";
import AdminRoute from "./AdminRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },
        {
          path: 'manageuser',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'instructorclass',
          element: <InstructorClass></InstructorClass>
        },
        {
          path: 'manageclass',
          element: <AdminRoute><AdminMangeClass></AdminMangeClass></AdminRoute>
        },
        {
          path: 'pay/:id',
          element: <Payment></Payment>
        },
        {
          path: 'history',
          element: <PaymentHistoyr></PaymentHistoyr>
        },
        {
          path: 'enrollclass',
          element: <EnrolledClass></EnrolledClass>
        }
      ]
    }
  ]);