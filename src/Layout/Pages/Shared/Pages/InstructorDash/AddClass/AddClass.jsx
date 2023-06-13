import { useContext } from "react";
import useUserEmail from "../../../../../../Hooks/useUserEmail";
import { AuthContext } from "../../../../../../Providers/AuthProvider";

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const { users, isUserLoading } = useUserEmail(user?.email);
  return (
    <div>
      <div className="card-body bg-green-200 rounded-md">
        <div className="flex flex-col lg:flex-row gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="text"
            placeholder="Class Image"
            className="input input-bordered"
          />
        </div>
        </div>
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea className="input input-bordered h-28 p-4" placeholder="Enter details">

          </textarea>
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
            disabled
            className="input input-bordered"
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
            disabled
            className="input input-bordered"
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
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Add class</button>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
