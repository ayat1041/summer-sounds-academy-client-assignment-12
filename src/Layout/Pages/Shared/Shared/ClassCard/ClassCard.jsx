import { FaUsers } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { DarkModeContext } from '../../../../../Providers/DarkModeProvider';
import { useContext } from 'react';
const ClassCard = ({ classItem }) => {
    const {_id, class_name, instructor_name, price ,class_image, available_seats, enrolled_students} = classItem;
    const { darkModeState } = useContext(DarkModeContext);
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={class_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className={`card-title text-2xl font-bold drop-shadow-md ${darkModeState? "text-green-400" : "text-green-500"}`}>{class_name}</h2>
        <div className="flex justify-between items-center bg-[#1e690b63] p-2 rounded-md mt-auto">
            <div className='flex items-center'>
            <FaUsers className='text-2xl'/><span><h2 className='text-2xl px-2 font-bold'>{enrolled_students}</h2></span>
            </div>
            <div className='flex items-center'>
            <span><h2 className='text-lg px-2 font-bold'>{instructor_name}</h2></span><GiTeacher className={`text-2xl ${darkModeState ? "text-green-400" : "text-slate-400"}`}/>
            </div>
        </div>
        <div className="card-actions justify-end">
          <button className={`btn border-none btn-sm hover:bg-green-950 font-bold text-white tracking-wide ${darkModeState ? "bg-green-500" : "bg-green-800"}`}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
