import { useQuery } from "@tanstack/react-query";
import AdminClassRow from "./AdminClassRow";
import useTitle from "../../../Hooks/useTitle";


const AdminMangeClass = () => {

  useTitle("Manage Class")

  const { data: classes = []} = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/class");
      return res.json();
    },
  });

  

  return (
    <div className="">
      <h2 className="text-2xl text-center mb-10 font-serif font-bold">All New Classes</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
        
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <AdminClassRow
                key={cls._id}
                cls={cls}
                index={index}
              ></AdminClassRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMangeClass;
