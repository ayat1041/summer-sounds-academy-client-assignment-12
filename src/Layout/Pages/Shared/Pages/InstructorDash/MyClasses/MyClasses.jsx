import Swal from "sweetalert2";
import useClasses from "../../../../../../Hooks/useClasses";
import MyClassesTd from "./MyClassesTd";
import { useContext } from "react";
import { AuthContext } from "../../../../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyClasses = () => {
        const [classes, isLoading] = useClasses(0);
        const {user} = useContext(AuthContext);
        const navigate = useNavigate();

        const handleUpdate = (singleClass) =>{
          console.log(singleClass);
          Swal.fire({
            title: 'Are you sure?',
            text: "Your post will be in status pending if you update",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'YES'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/dashboard/updateClass?id=${singleClass._id}`);
            }
          })
        }
  return (
    <div className="overflow-x-auto px-14">
      
      <table className="table border-2 border-green-400">
        {/* head */}
        <thead className="bg-green-400 text-white">
          <tr>
            <th>Image</th>
            <th>Class Name</th>
            <th className="whitespace-break-spaces">Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {classes?.map((singleClass) => (
           <MyClassesTd key={singleClass._id} singleClass={singleClass} handleUpdate={handleUpdate}></MyClassesTd>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
    );
};

export default MyClasses;


{/* <form */}
      //   className="card-body bg-green-200 rounded-md"
      // >
      //   <div className="flex flex-col lg:flex-row gap-4">
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Class Name</span>
      //       </label>
      //       <input
      //         type="text"
      //         placeholder="Class Name"
      //         name="class_name"
      //         className="input input-bordered"
      //         required
      //       />
      //     </div>
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Class Image</span>
      //       </label>
      //       <input
      //         type="text"
      //         placeholder="Class Image"
      //         name="class_image"
      //         className="input input-bordered"
      //         required
      //       />
      //     </div>
      //   </div>
      //   <div>
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Details</span>
      //       </label>
      //       <textarea
      //         className="input input-bordered h-28 p-4"
      //         name="class_details"
      //         placeholder="Enter details"
      //         required
      //       ></textarea>
      //     </div>
      //   </div>
      //   <div className="flex flex-col lg:flex-row gap-4">
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Instructor Name</span>
      //       </label>
      //       <input
      //         type="text"
      //         placeholder={user?.displayName}
      //         value={user?.displayName}
      //         name="instructor_name"
      //         disabled
      //         className="input input-bordered"
      //         required
      //       />
      //     </div>
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Instructor Mail</span>
      //       </label>
      //       <input
      //         type="text"
      //         placeholder={user?.email}
      //         value={user?.email}
      //         name="instructor_email"
      //         disabled
      //         className="input input-bordered"
      //         required
      //       />
      //     </div>
      //   </div>
      //   <div className="flex flex-col lg:flex-row gap-4">
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Available Seats</span>
      //       </label>
      //       <input
      //         type="text"
      //         placeholder="Available Seats"
      //         name="available_seats"
      //         className="input input-bordered"
      //         required
      //       />
      //     </div>
      //     <div className="form-control">
      //       <label className="label">
      //         <span className="label-text">Price</span>
      //       </label>
      //       <input
      //         type="text"
      //         placeholder="Price"
      //         name="price"
      //         className="input input-bordered"
      //         required
      //       />
      //     </div>
      //   </div>
      //   <div className="form-control mt-6">
      //     <button type="submit" className="btn btn-success">
      //       Add class
      //     </button>
      //   </div>
      // </form>