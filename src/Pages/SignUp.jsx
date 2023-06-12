import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Container from "../components/Container";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../Hooks/useTitle";

const SignUp = () => {

  useTitle("SignUp")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleSignIn, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword){
      Swal.fire(
        'Password is not match.',
        'Please try again.',
        'error'
      )
      return;
    }
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            img: data.photoURL,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <Container>
      <div className="hero min-h-screen bg-base-200 p-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-96 max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center mt-10">SignUp Now</h1>
            <p className="text-center mt-4">SignUp to access your account</p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  required
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border rounded-md text-white"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  required
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 text-white"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 text-white"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border text-white rounded-md border-gray-300 focus:outline-rose-500"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border text-white rounded-md border-gray-300 focus:outline-rose-500"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.confirmPassword?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>


              <div className="form-control mt-6">
                <input
                  className="btn btn-error"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
                <FaGoogle size={32} />

                <p>Continue with Google</p>
              </div>
            </form>
            <p className="mb-4">
              <small>
                Already have an account?
                <Link className="underline text-rose-400" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
