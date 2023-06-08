import './Login.css';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="hidden lg:flex py-12 pl-5 w-full whitespace-pre text-left bg-green-300 login_style">
          <h1 className="text-8xl font-bold lg:my-auto uppercase tracking-widest text-green-700">Login now</h1>
          <IoIosArrowForward className='mx-auto mt-8 text-[160px] mb-8 text-green-700 animate-pulse'/>
        </div>
        <div className="flex flex-col pt-10 lg:hidden pb-14 w-full whitespace-pre bg-green-300 login_style_mobile">
          <h1 className="text-4xl mx-auto font-bold lg:my-auto">Login now!</h1>
          <IoIosArrowDown className='mx-auto mt-8 text-9xl text-green-700 animate-bounce'/>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
