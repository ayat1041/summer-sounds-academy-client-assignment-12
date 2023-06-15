import { useContext } from "react";
import useUserEmail from "../../../../../../Hooks/useUserEmail";
import { AuthContext } from "../../../../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { users, isUserLoading } = useUserEmail(user?.email);

  const handleAddList = (event) => {
    event.preventDefault();
    const form = event.target;
    const class_name = form.class_name.value;
    const class_image = form.class_image.value;
    const details = form.class_details.value;
    const instructor_name = form.instructor_name.value;
    const instructor_email = form.instructor_email.value;
    const available_seats = form.available_seats.value;
    const price = form.price.value;

    const newClass = {
      class_image,
      class_name,
      details,
      instructor_name,
      instructor_email,
      available_seats,
      price,
    };

    axios
      .post("https://summer-sounds-academy-server-ayat1041.vercel.app/classes", newClass)
      .then((response) => {
        console.log("Class created successfully:", response.data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Added, It will be live once approved',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.error("Error creating class:", error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddList}
        className="card-body bg-green-200 rounded-md"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
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
              placeholder="Class Image"
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
              placeholder="Enter details"
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
              placeholder={user?.displayName}
              value={user?.displayName}
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
              placeholder={user?.email}
              value={user?.email}
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
              placeholder="Available Seats"
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
              placeholder="Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-success">
            Add class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
