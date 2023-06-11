/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UpdateClass = (props) => {
  const { handleClassUpdate } = props;
  console.log(props.cls.price);
  console.log(props.cls._id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label htmlFor={`my-modal-${props?.cls._id}`} className="btn btn-sm btn-info">
        Edit
      </label>
      <input type="checkbox" id={`my-modal-${props?.cls._id}`} className="modal-toggle" />
      <div {...props} className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h2 className="text-5xl text-accent text-center font-bold mb-10">
            Update Class
          </h2>
          <form className="text-center" onSubmit={handleSubmit(handleClassUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}

            <div>
              <h1 className="text-start text-3xl text-accent mb-2 lg:ml-40">Price:</h1>
              <input
                className="w-1/2 h-14 rounded-xl p-2 mb-4 input-accent"
                {...register("price")}
                placeholder="Price"
                type="number"
                defaultValue={props?.cls?.price}
              />
            </div>

            <input
              className="w-1/2 h-14 rounded-xl p-2 mb-4 hidden"
              {...register("_id")}
              defaultValue={props?.cls?._id}
            />

            <div>
              <h1 className="text-start text-3xl text-accent mb-2 lg:ml-40">Available Quantity:</h1>
              <input
                className="w-1/2 h-14 rounded-xl p-2 mb-4 input-accent"
                {...register("spotsAvailable")}
                placeholder="Available quantity"
                type="number"
                defaultValue={props?.cls?.spotsAvailable}
              />
            </div>
            <div>
              <h1 className="text-start text-3xl text-accent mb-2 lg:ml-40">Enrolled:</h1>
              <input
                className="w-1/2 h-14 rounded-xl p-2 mb-4 input-accent"
                {...register("studentsEnrolled")}
                placeholder="Students Enrolled"
                type="number"
                defaultValue={props?.cls?.studentsEnrolled}
              />
            </div>

            <div className="w-full mt-4">
              <button className="btn btn-outline btn-success">
                Update
              </button>
            </div>
          </form>

          <div className="modal-action">
            <label htmlFor={`my-modal-${props?.cls._id}`} className="btn">
              Exit!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateClass;
