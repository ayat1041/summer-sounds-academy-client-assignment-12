import { useEffect, useState } from "react";
import useClasses from "../../../../../../../Hooks/useClasses";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MySelectedClassesTd = ({ courseId, status,student_id,enrollment_id }) => {
    const [classes, isLoading] = useClasses();
    const [selectedClass, setSelectedClass] = useState([]);

    useEffect(() => {
        const foundClass = classes?.find((singleClass) => singleClass._id === courseId);
        setSelectedClass(foundClass);
        console.log(selectedClass);
    }, [classes, courseId,selectedClass]);

    const deleteEnrollment = () => {
      axios
        .delete(`https://summer-sounds-academy-server-ayat1041.vercel.app/enrollment/${enrollment_id}`)
        .then((response) => {
          console.log(response.data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((error) => {
          console.error("Error deleting enrollment:", error);
        });
    };


    if (isLoading) {
      return <p>Loading...</p>; // Render a loading state while data is being fetched
    }
    if(status === 'paid'){
      return;
    }
    return (
        <tr>
        <td className="text-xs whitespace-break-spaces">
          {selectedClass?.class_name}
        </td>
        <td className="text-xs whitespace-break-spaces">
          {selectedClass?.instructor_name}
        </td>
        <td className="text-xs whitespace-break-spaces">
          {selectedClass?.instructor_email}
        </td>
        <td className="text-xs whitespace-break-spaces">
          {selectedClass?.available_seats}
        </td>
        <td className="text-xs whitespace-break-spaces">
          {selectedClass?.price}
        </td>
        <td className="text-xs whitespace-break-spaces">
          {status === "to_be_paid" ? (<button className="btn btn-xs btn-warning">pending</button> ):(<button className="btn btn-xs btn-primary">paid</button>)}
        </td>
        <td className="text-xs whitespace-break-spaces">
          <Link to={`/dashboard/payment?enrollment_id=${enrollment_id}&course_name=${selectedClass?.class_name}&classId=${courseId}&instructorEmail=${selectedClass?.instructor_email}&price=${selectedClass?.price}&studentId=${student_id}`} className="btn btn-xs btn-success" disabled={status !== "to_be_paid"}>Pay</Link>
        </td>
        <td>
          <button className="btn btn-xs btn-error" onClick={deleteEnrollment}>Remove</button>
        </td>
        </tr>
    );
};

export default MySelectedClassesTd;