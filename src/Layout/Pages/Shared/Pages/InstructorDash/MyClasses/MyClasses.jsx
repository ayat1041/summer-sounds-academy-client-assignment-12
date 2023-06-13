import useClasses from "../../../../../../Hooks/useClasses";
import ManageClassesTd from "../../admin/ManageClasses/ManageClassesTd/ManageClassesTd";
import MyClassesTd from "./MyClassesTd";

const MyClasses = () => {
        const [classes, isLoading] = useClasses(0);
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
          </tr>
        </thead>
        <tbody>
          {classes?.map((singleClass) => (
           <MyClassesTd key={singleClass._id} singleClass={singleClass}></MyClassesTd>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
    );
};

export default MyClasses;