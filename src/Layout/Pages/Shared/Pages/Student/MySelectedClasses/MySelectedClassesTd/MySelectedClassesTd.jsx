import { useEffect, useState } from "react";
import useClasses from "../../../../../../../Hooks/useClasses";
import { Link } from "react-router-dom";

const MySelectedClassesTd = ({ courseId, status,student_id,enrollment_id }) => {
    const [classes, isLoading] = useClasses();
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        const foundClass = classes?.find((singleClass) => singleClass._id === courseId);
        setSelectedClass(foundClass);
    }, [classes, courseId,selectedClass]);
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
        </tr>
    );
};

export default MySelectedClassesTd;