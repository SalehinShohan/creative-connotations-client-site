import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full p-16">
      <h2 className="text-3xl font-serif font-semibold">Add Class</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Class name"
            {...register("name", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Class name"
            {...register("instructor", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor email </span>
          </label>
          <input
            type="email"
            placeholder="Enter Class name"
            {...register("email", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
            type="number"
            placeholder="Enter Class name"
            {...register("seat", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Enter Class name"
            {...register("price", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            {...register("file", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
