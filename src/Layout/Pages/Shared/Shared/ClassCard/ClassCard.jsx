import { FaUsers } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
const ClassCard = ({ classItem }) => {
    const {_id, class_name, instructor_name, price ,class_image, available_seats, enrolled_students} = classItem;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={class_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-400 text-2xl font-bold drop-shadow-md">{class_name}</h2>
        <div className="flex justify-between items-center bg-[#1e690b63] p-2 rounded-md mt-auto">
            <div className='flex items-center'>
            <FaUsers className='text-2xl'/><span><h2 className='text-2xl px-2 font-bold'>{enrolled_students}</h2></span>
            </div>
            <div className='flex items-center'>
            <span><h2 className='text-lg px-2 font-bold'>{instructor_name}</h2></span><GiTeacher className='text-2xl text-green-400'/>
            </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn border-none btn-sm bg-green-500 hover:bg-green-900 font-bold text-white tracking-wide">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
