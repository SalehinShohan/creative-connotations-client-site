import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const EnrolledClass = () => {
    const[axiosSecure] = useAxiosSecure();

  const { data: users = [], } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });
    return (
        <div className="w-full lg:ml-16">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Your Email</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.className}</td>
                <td>{user.email}</td>
                <td>{user.price} BDT</td>
                <td>{user.date}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default EnrolledClass;