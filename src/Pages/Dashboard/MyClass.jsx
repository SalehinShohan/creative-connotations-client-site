import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import useTitle from "../../Hooks/useTitle";
import { AiFillDelete } from "react-icons/ai";

const MyClass = () => {
  useTitle("My Classes");
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

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
              fetch(`http://localhost:5000/carts/${row._id}`, {
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
    <div className="w-10/12">
      <div className="font-semibold text-2xl text-white flex justify-evenly mb-10">
        <h2>Total Classes: {cart.length}</h2>
        <h2>Total Price: {total} BDT</h2>
        <button className="btn btn-sm btn-success">PAY</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>#</th>
              <th>Course</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{row.language}</td>
                <td>{row.price} BDT</td>
                <td>
                  <button 
                  onClick={() => handleDelete(row)} 
                  className="btn btn-ghost btn-sm text-white bg-red-500">
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
