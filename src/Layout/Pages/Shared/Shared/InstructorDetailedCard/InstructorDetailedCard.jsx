import { SiGoogleclassroom } from "react-icons/si";
const InstructorDetailedCard = ({ userSolo,noEmail}) => {
  const { name, email, image, no_of_classes } = userSolo;
  return (
    <div className="card card-side bg-base-100 hover:bg-base-200 transition-all duration-200 ease-in shadow-xl cursor-default">
      <figure className="w-max p-0 pr-10 bg-green-200 avatar_background">
        <img
          className="mr-auto ml-6 rounded-full border-4 border-green-400 w-28"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body ml-8 px-1 py-6">
        <h2 className="card-title">{name}</h2>
        {!noEmail && <h2 className="text-sm font-medium">{email}</h2>}
        <div className="flex flex-col w-max items-center">
          <SiGoogleclassroom className="mt-2 text-2xl text-slate-600" />
          <span className="text-2xl font-bold text-green-600">
            {no_of_classes}
          </span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-sm hover:bg-green-900 border-none bg-green-500 font-bold text-white tracking-wide mr-6 cursor-pointer">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetailedCard;
