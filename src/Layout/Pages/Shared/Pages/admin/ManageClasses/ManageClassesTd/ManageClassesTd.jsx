import axios from "axios";
import Swal from "sweetalert2";

const ManageClassesTd = ({ singleClass, setCurrentClassId }) => {
  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://summer-sounds-academy-server-ayat1041.vercel.app/classes/approval/approved/${id}`)
          .then((response) => {
            Swal.fire("Approved", "Class Approved.", "success");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "An error occurred while denying the class.",
              "error"
            );
          });
      }
    });
  };

  const handleDeny = (id) => {
    Swal.fire({
      title: "Send Feedback",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Deny and send feedback",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const feedback = result.value;
        axios
          .patch(`https://summer-sounds-academy-server-ayat1041.vercel.app/classes/approval/denied/${id}`, {
            status: "denied",
            feedback: feedback,
          })
          .then((response) => {
            Swal.fire("Class denied!", "", "success");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "An error occurred while denying the class.",
              "error"
            );
          });
      }
    });
  };
  return (
    <>
      <tr key={singleClass._id}>
        <td>
          <img src={singleClass.class_image} className="w-11" alt="" />
        </td>
        <td className="text-xs whitespace-break-spaces">
          {singleClass.class_name}
        </td>
        <td className="text-green-900 font-medium">
          {singleClass.instructor_name}
        </td>
        <td className="text-xs">{singleClass.instructor_email}</td>
        <td>{singleClass.available_seats}</td>
        <td className="text-xs whitespace-nowrap text-right">
          $ {singleClass.price}
        </td>
        <td>{singleClass.status}</td>
        <td className="flex flex-col gap-1 relative">
          <button
            onClick={() => {
              handleApprove(singleClass._id);
            }}
            className="btn btn-xs whitespace-nowrap btn-success"
            disabled={
              singleClass.status === "approved" ||
              singleClass.status === "denied"
            }
          >
            Approve
          </button>
          <button
            className="btn btn-xs whitespace-nowrap btn-error"
            disabled={
              singleClass.status === "approved" ||
              singleClass.status === "denied"
            }
            onClick={() => {
              handleDeny(singleClass._id);
            }}
          >
            Deny
          </button>
          {/* <button
            className="btn btn-xs whitespace-nowrap btn-info"
            disabled={singleClass.feedback || singleClass.status === "approved"}
          >
            Send Feedback
          </button> */}
        </td>
      </tr>
    </>
  );
};

export default ManageClassesTd;
