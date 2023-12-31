import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useTitle from "../../Hooks/useTitle";


const EnrolledClass = () => {
  useTitle("My Enroll Classes")
    const[axiosSecure] = useAxiosSecure();

  const { data: users = [], } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });
    return (
        <div className="w-full lg:ml-16">
          <h2 className="text-center text-3xl  mb-16 font-serif font-bold">Enrolled Classes</h2>
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