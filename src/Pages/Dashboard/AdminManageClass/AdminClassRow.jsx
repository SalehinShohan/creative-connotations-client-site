/* eslint-disable react/prop-types */


import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { useState } from "react";

const AdminClassRow = ({ cls, index }) => {
  const [, refetch] = useCart();
  const [showModal, setShowModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleApprove = (id) => {
    fetch(
      `https://creative-connotations-server-site.vercel.app/approveClass/${id}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  const handleDeny = (id) => {
    fetch(
      `https://creative-connotations-server-site.vercel.app/denyClass/${id}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  const handleFeedback = (cls) => {
    // e.preventDefault();

    // const feedback = e.target.feedback.value;
    // const instId = cls._id;
    // console.log(instId);
    fetch(`https://creative-connotations-server-site.vercel.app/feedback/${cls?._id}`,{
        method: "PATCH",
        headers: {
          'content-type':'application/json',
        },
       
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFeedbackText("");
  };

  const handleFeedbackSubmit = (id) => {
    handleFeedback(id);
    closeModal();
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={cls.img} alt="" />
            </div>
          </div>
        </div>
      </td>
      <td>{cls.language}</td>
      <td>{cls.price} BDT</td>
      <td>{cls.status}</td>
      <td>
        <button
          disabled={cls?.status !== "pending"}
          onClick={() => handleApprove(cls?._id)}
          className="btn bg-red-500 text-white btn-xs">
          Approve
        </button>
        <button
          disabled={cls?.status !== "pending"}
          onClick={() => handleDeny(cls?._id)}
          className="btn bg-red-500 text-white btn-xs">
          Deny
        </button>

        <button
          disabled={
            cls?.feedback ||
            cls?.status === "pending" ||
            cls?.status === "approve"
          }
          onClick={openModal}
          className="btn bg-red-500 text-white btn-xs"
        >
          Feedback
        </button>
      </td>
      <td>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
          <div className="bg-white p-6 w-96 rounded-lg z-20">
            <h2 className="text-lg font-bold mb-4">Feedback</h2>
            <textarea
              value={feedbackText}
              name="feedback"
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full border p-2 mb-4"
              rows={4}
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="mr-2 bg-gray-200 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleFeedbackSubmit(cls?._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      </td>
      
    </tr>
  );
};

export default AdminClassRow;
