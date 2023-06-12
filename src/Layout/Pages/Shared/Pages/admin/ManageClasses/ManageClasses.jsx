import useClasses from "../../../../../../Hooks/useClasses";

const ManageClasses = () => {
    const [classes, isLoading] = useClasses(0);
  return (
    <div className="overflow-x-auto px-24">
      <table className="table border-2 border-green-400">
        {/* head */}
        <thead className="bg-green-400 text-white">
          <tr>
            <th>Image</th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Email</th>
            <th className="whitespace-break-spaces">Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            classes?.map(singleClass=><tr key={singleClass._id}>
            <td><img src={singleClass.class_image} className="w-11" alt="" /></td>
            <td className="text-xs whitespace-break-spaces">{singleClass.class_name}</td>
            <td className="text-green-900 font-medium">{singleClass.instructor_name}</td>
            <td className="text-xs">{singleClass.instructor_email}</td>
            <td>{singleClass.available_seats}</td>
            <td className="text-xs whitespace-nowrap text-right">$ {singleClass.price}</td>
            <td>{singleClass.status}</td>
            <td className="flex flex-col gap-1">
                <button className="btn btn-xs whitespace-nowrap btn-success" disabled={singleClass.status === 'approved' || singleClass.status === 'denied'}>Approve</button>
                <button className="btn btn-xs whitespace-nowrap btn-error"  disabled={singleClass.status === 'approved' || singleClass.status === 'denied'}>Deny</button>
                <button className="btn btn-xs whitespace-nowrap btn-info" disabled={singleClass.feedback || singleClass.status === 'approved'}>Send Feedback</button>
            </td>
            </tr>)
          }
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
