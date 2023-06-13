import { useContext } from "react";
import { AuthContext } from "../../../../../../Providers/AuthProvider";

const MyClassesTd = ({ singleClass, setCurrentClassId }) => {
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
            <td className="bg-red-400">{singleClass.status}</td>
          ) : (
            <td>{singleClass.status}</td>
          )}
        </tr>
      </>
    );
  }
};

export default MyClassesTd;
