import useClasses from "../../../../../../Hooks/useClasses";
import ManageClassesTd from "./ManageClassesTd/ManageClassesTd";

const ManageClasses = () => {
  const [classes, isLoading] = useClasses(0);
  return (
    <div className="overflow-x-auto px-14">
      
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
          {classes?.map((singleClass) => (
           <ManageClassesTd key={singleClass._id} singleClass={singleClass}></ManageClassesTd>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
