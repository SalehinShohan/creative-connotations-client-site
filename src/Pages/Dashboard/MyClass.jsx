import useCart from "../../Hooks/useCart";
import useTitle from "../../Hooks/useTitle";
import Container from "../../components/Container";
import { AiFillDelete } from "react-icons/ai";

const MyClass = () => {
  useTitle("My Classes");
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <Container>
      <div className="font-semibold flex justify-evenly">
        <h2>Total Classes: {cart.length}</h2>
        <h2>Total Price: {total} BDT</h2>
        <button className="btn btn-sm btn-success">PAY</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
                  <button className="btn btn-ghost btn-sm text-white bg-red-500">
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyClass;
