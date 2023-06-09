import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [passShown, setPassShown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordConfirm = watch("password");

  const onSubmit = (data) => {
    const {name, email, password} = data;
    console.log(name,email,password);
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
              <p className="text-sm mt-4">
                Already have an account ?
                <Link to="/Login" className="text-sm mx-2 font-medium">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-0 bg-green-500 hover:bg-green-900 text-lg font-bold tracking-wider transition-all duration-200 ease-in">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
