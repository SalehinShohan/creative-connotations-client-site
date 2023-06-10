/* eslint-disable react/prop-types */

import useCart from "../../../Hooks/useCart";

const AdminClassRow = ({ cls, index }) => {
  const [, refetch] = useCart();

  const handleApprove = (id) => {
    fetch(`http://localhost:5000/approveClass/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  const handleDeny = (id) => {
    fetch(`http://localhost:5000/denyClass/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
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
      </td>
    </tr>
  );
};

export default AdminClassRow;
