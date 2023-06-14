import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
    const classData = useLoaderData();
    console.log(classData);

    const handleUpdateClass = (event) =>{
        event.preventDefault();
        const form = event.target;
        const class_name = form.class_name.value;
        const class_image = form.class_image.value;
        const details = form.class_details.value;
        const instructor_name = form.instructor_name.value;
        const instructor_email = form.instructor_email.value;
        const available_seats = form.available_seats.value;
        const price = form.price.value;
    
        const updatedClass = {
          class_image,
          class_name,
          details,
          instructor_name,
          instructor_email,
          available_seats,
          price,
        };
    
        axios
          .patch(`http://localhost:5000/classes/updateClass/${classData._id}`, updatedClass)
          .then((response) => {
            console.log("Class updated successfully:", response.data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Updated, It will be live once approved',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch((error) => {
            console.error("Error updating class:", error);
          });

        console.log(updatedClass);
    }

    return (
        <div>
      <form
        onSubmit={handleUpdateClass}
        className="card-body bg-green-200 rounded-md"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              defaultValue={classData?.class_name}
              name="class_name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              defaultValue={classData?.class_image}
              name="class_image"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              className="input input-bordered h-28 p-4"
              name="class_details"
              defaultValue={classData?.details}
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              defaultValue={classData?.instructor_name}
              name="instructor_name"
              disabled
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Mail</span>
            </label>
            <input
              type="text"
              defaultValue={classData?.instructor_email}
              name="instructor_email"
              disabled
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="text"
              defaultValue={classData?.available_seats}
              name="available_seats"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={classData?.price}
              name="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-success">
            Update class
          </button>
        </div>
      </form>
    </div>
    );
};

export default UpdateClass;