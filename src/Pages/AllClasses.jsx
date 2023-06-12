/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const AllClasses = ({ cls }) => {
  const { img, language, instructor, spotsAvailable, price,studentsEnrolled, _id } = cls;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const handleAddToCart = (cls) => {
    console.log(cls);
    if (user && user.email) {
        const orderClass = {classId: _id, language, img, price, spotsAvailable,studentsEnrolled, instructor, email: user.email}
      fetch("https://creative-connotations-server-site.vercel.app/carts", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderClass)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class add on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login before add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    }
  };

  
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="" className="rounded-xl w-96 h-80" />
          </figure>
          <p className="bg-slate-900 text-white absolute right-0 mr-11 mt-12 px-2 rounded-lg">
            {price} BDT
          </p>
          <div className="card-body items-start text-center">
            <h2 className="card-title text-white">Course: {language}</h2>
            <p>Instructor: {instructor}</p>
            <p>Available Seats: {spotsAvailable}</p>
            <p>Price: {price}</p>
            <p>Enrolled: {studentsEnrolled ? cls.studentsEnrolled : 0}</p>

            <div className="card-actions">
              <button
                onClick={() => handleAddToCart(cls)}
                className="btn btn-sm btn-accent">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
