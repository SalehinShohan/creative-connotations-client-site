import { useQuery } from "@tanstack/react-query";
import useCart from "../../Hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";


const InstructorClass = () => {
  const [, refetch] = useCart();

  const { data: classes = []} = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/class");
      return res.json();
    },
  });

  const handleDelete = (row) => {
        
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/class/${row._id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
        }
      })

}

  

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
              <th>Available</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
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
                <td>{cls.spotsAvailable}</td>
                <td>{cls.price} BDT</td>
                <td>
                {cls.status}

                </td>
                <td>
                <button 
                  onClick={() => handleDelete(cls)} 
                  className="btn btn-ghost btn-sm text-white bg-red-500">
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">Update</button>
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
