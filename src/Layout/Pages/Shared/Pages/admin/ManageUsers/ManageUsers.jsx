import axios from "axios";
import useUsers from "../../../../../../Hooks/useUsers";
import { TiUserDelete } from "react-icons/ti";
import Swal from "sweetalert2";
const ManageUsers = () => {
  const [users, isUserLoading, refetch] = useUsers(0, "", "");
  const makeAdmin = (id) => {
    Swal.fire({
      title: "Make this user Admin?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:5000/users/promote/${id}`, { role: "admin" })
          .then((res) => {
            Swal.fire("Promoted!", "User promoted to Admin.", "success");
            refetch();
          });
      }
    });
  };
  const makeInstructor = (id) => {
    Swal.fire({
      title: "Make this user Instructor?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:5000/users/promote/${id}`, {
            role: "instructor",
          })
          .then((res) => {
            Swal.fire("Promoted!", "User promoted to Instructor.", "success");
            refetch();
          });
      }
    });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto px-24">
      <table className="table border-2 border-green-400">
        <thead className="bg-green-400 text-white">
          <tr>
            <th>Username</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td className="text-green-900 font-medium">{user.name}</td>
              <td>
                <img src={user.image} className="w-11 rounded-full" alt="" />
              </td>
              <td className="text-xs">{user.email}</td>
              <td>{user.role}</td>
              <td className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    makeAdmin(user._id);
                  }}
                  disabled={user.role !== "student"}
                  className="btn btn-xs whitespace-nowrap btn-success"
                >
                  Make Admin
                </button>
                <button
                  onClick={() => {
                    makeInstructor(user._id);
                  }}
                  disabled={user.role !== "student"}
                  className="btn btn-xs whitespace-nowrap btn-info"
                >
                  Make Instructor
                </button>
              </td>
              <td>
                <TiUserDelete
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                  className="text-2xl mx-auto text-red-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
