import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

console.log(img_hosting_token)

const AddClass = () => {
  const { register, handleSubmit } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if(result.success){
            const imgURL = result.data.display_url;
            const {language, instructor, spotsAvailable, price, email} = data;

            const newClass = {language, instructor, spotsAvailable:parseFloat(spotsAvailable), img: imgURL, price:parseFloat(price), email}
            console.log(newClass)
            
        }

      });

    console.log(data);
  };

  return (
    <div className="w-full p-16">
      <h2 className="text-3xl font-serif font-semibold">Add Class</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Class name"
            {...register("language", { required: true })}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Instructor name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Class name"
            {...register("instructor", { required: true })}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Instructor email </span>
          </label>
          <input
            type="email"
            placeholder="Enter Class name"
            {...register("email", { required: true })}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
            type="number"
            placeholder="Enter Class name"
            {...register("spotsAvailable", { required: true })}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Enter Class name"
            {...register("price", { required: true })}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            {...register("img", { required: true })}
            className="file-input file-input-bordered w-full max-w-lg"
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
