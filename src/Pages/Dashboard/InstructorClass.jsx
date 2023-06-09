import { useQuery } from "@tanstack/react-query";

const InstructorClass = () => {
  const { data: classes = []} = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/class");
      return res.json();
    },
  });

  return (
    <div className="w-full p-16">
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
              <tr key={cls._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.img}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cls.language}</td>
                <td>{cls.price} BDT</td>
                <td>Pending</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClass;
