const ManageClassesTd = ({ singleClass, setCurrentClassId }) => {
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
          >
            Deny
          </button>
         <button
            className="btn btn-xs whitespace-nowrap btn-info"
            disabled={singleClass.feedback || singleClass.status === "approved"}
          >
            Send Feedback
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageClassesTd;
