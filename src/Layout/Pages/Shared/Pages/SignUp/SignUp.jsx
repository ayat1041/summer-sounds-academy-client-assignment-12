import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import axios from "axios";

const SignUp = () => {
  const [passShown, setPassShown] = useState(false);
  const { user } = useContext(AuthContext);
  const { signUp, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const passwordConfirm = watch("password");

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        axios
          .post("http://localhost:5000/users", {
            image: result.user.photoURL,
            name: result.user.displayName,
            email: result.user.email,
            role: "student",
          })
          .then((response) => console.log(response));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    signUp(email, password)
      .then((res) => {
        updateUserProfile(name, photo)
          .then(() => {
            console.log("user updated", res.user);
            axios
              .post("http://localhost:5000/users", {
                image: photo,
                name: name,
                email: email,
                role: "student",
              })
              .then((response) => console.log(response));
              navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="hidden lg:flex py-12 pr-5 w-full whitespace-pre text-left bg-green-300 sign_style">
          <IoIosArrowBack className="mx-10 mt-8 text-[160px] mb-8 text-green-700 animate-pulse" />
          <h1 className="text-8xl font-bold lg:my-auto uppercase tracking-widest text-green-700">
            Sign up
          </h1>
        </div>
        <div className="flex flex-col pt-10 lg:hidden pb-14 w-full whitespace-pre bg-green-300 login_style_mobile">
          <h1 className="text-4xl mx-auto font-bold lg:my-auto">Sign up</h1>
          <IoIosArrowDown className="mx-auto mt-8 text-9xl text-green-700 animate-bounce" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-wider">
                  Name
                </span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && (
                <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                  <MdError className="text-4xl animate-pulse" />
                  <p>name is required</p>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-wider">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.email && (
                <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                  <MdError className="text-4xl animate-pulse" />
                  <p>Email is required</p>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-wider">
                  Password
                </span>
              </label>
              <div className="flex">
                <input
                  type={passShown ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Z])(?=.*[-@#$%^&+=])(?=.*[a-z]).{6,}$/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered flex-1 rounded-ee-none rounded-se-none"
                />
                <div
                  onClick={() => setPassShown(!passShown)}
                  className="btn border-1 border-slate-300 rounded-es-none rounded-ss-none px-2"
                >
                  {!passShown ? (
                    <BsFillEyeFill className="text-2xl text-success drop-shadow-sm" />
                  ) : (
                    <BsFillEyeSlashFill className="text-2xl text-red-600 drop-shadow-sm" />
                  )}
                </div>
              </div>
              {errors.password?.type === "pattern" && (
                <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                  <MdError className="text-4xl animate-pulse" />
                  <p>
                    Password must contain minimum - 6 characters, 1 uppercase, 1
                    number & 1 special character
                  </p>
                </div>
              )}
              {errors.password?.type === "required" && (
                <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                  <MdError className="text-4xl animate-pulse" />
                  <p>Password is required</p>
                </div>
              )}
            </div>
            {/* confirm pass */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-wider">
                  Confirm Password
                </span>
              </label>
              <div className="flex">
                <input
                  type={passShown ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === passwordConfirm,
                  })}
                  placeholder="Enter your password again"
                  className="input input-bordered flex-1 rounded-ee-none rounded-se-none"
                />
                <div
                  onClick={() => setPassShown(!passShown)}
                  className="btn border-1 border-slate-300 rounded-es-none rounded-ss-none px-2"
                >
                  {!passShown ? (
                    <BsFillEyeFill className="text-2xl text-success drop-shadow-sm" />
                  ) : (
                    <BsFillEyeSlashFill className="text-2xl text-red-600 drop-shadow-sm" />
                  )}
                </div>
              </div>
              {errors.confirmPassword?.type === "validate" && (
                <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                  <MdError className="text-4xl animate-pulse" />
                  <p>Passwords do not match</p>
                </div>
              )}
              {errors.password?.type === "required" && (
                <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                  <MdError className="text-4xl animate-pulse" />
                  <p>Password is required</p>
                </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium tracking-wider">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Provide your image URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <div className="flex items-center gap-2 my-2 text-xs text-red-700">
                    <MdError className="text-4xl animate-pulse" />
                    <p>Photo URL is required</p>
                  </div>
                )}
              </div>
              <p className="text-sm mt-4">
                Already have an account ?
                <Link to="/Login" className="text-sm mx-2 font-medium">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-0 bg-green-500 hover:bg-green-900 text-lg font-bold tracking-wider transition-all duration-200 ease-in">
                Sign Up
              </button>
            </div>
          </form>
          <div className="divider-horizontal h-[2px] opacity-30 bg-green-950 w-[80%] mx-auto"></div>
          <div
            onClick={handleGoogleSignIn}
            className="p-4 pb-10 w-full text-center"
          >
            <BsGoogle className="mx-auto text-4xl text-green-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
