import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[#2da87f] w-full min-h-screen">
            <img src="https://media.tenor.com/OyUVgQi-l-QAAAAC/404.gif" className="mx-auto w-1/2" alt="" />
            <div className="w-full flex flex-col lg:flex-row items-center justify-center py-10 gap-4"><h1 className="text-white font-bold text-2xl">Country Roads </h1><Link to="/" className="btn btn-md btn-accent font-bold text-2xl text-white tracking-wider">Take me home</Link></div>
        </div>
    );
};

export default ErrorPage;