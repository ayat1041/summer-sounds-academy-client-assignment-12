import { useContext } from "react";
import { AuthContext } from "../../../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyClassesTd = ({ singleClass, setCurrentClassId,handleUpdate }) => {
  const { user } = useContext(AuthContext);

  if (singleClass?.instructor_name === user?.displayName) {
    return (
      <>
        <tr key={singleClass._id}>
          <td>
            <img src={singleClass.class_image} className="w-28" alt="" />
          </td>
          <td className="text-xs whitespace-break-spaces">
            {singleClass.class_name}
          </td>
          <td>{singleClass.available_seats}</td>
          <td className="text-xs whitespace-nowrap text-right">
            $ {singleClass.price}
          </td>
          {singleClass.status === "denied" ? (
            <td className="bg-red-400 text-white font-bold">{singleClass.status}</td>
          ) : (
            <td
              className={
                singleClass.status === "pending" ? "bg-neutral text-white font-bold" : "bg-success text-white font-bold"
              }
            >
              {singleClass.status}
            </td>
          )}
          <td>
            {singleClass.feedback ? (singleClass.feedback):("No Feedbacks")}
          </td>
          <td className="text-xs whitespace-break-spaces">
            <Link to={`/dashboard/updateClass/${singleClass._id}`} className="btn btn-sm btn-warning">update</Link>
          </td>
        </tr>
        
      </>
    );
  }
};

export default MyClassesTd;
