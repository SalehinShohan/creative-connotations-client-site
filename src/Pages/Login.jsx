import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import {FaGoogle  } from 'react-icons/fa';
import toast from 'react-hot-toast'
import Container from "../components/Container";
import useTitle from "../Hooks/useTitle";


const Login = () => {
  useTitle("Login")
  const { signIn, googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };


  //google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              
                navigate(from, { replace: true })
              
            });

      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  return (
    <Container Container>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          
          <div className="card md:w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center mt-16">Login Now</h1>
            <p className="text-center mt-4">
            Sign in to access your account
            </p>
            <form onSubmit={handleLogin} className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500  text-gray-900'
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 text-gray-900'
                />
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
                  value="Login"
                />
              </div>

            </form>

            <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FaGoogle size={32} />

          <p>Continue with Google</p>
        </div>

            <p className="mb-5">
              <small>
                New Here? <Link className="underline text-rose-400" to="/signup">SignUp</Link>{" "}
              </small>
            </p>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
