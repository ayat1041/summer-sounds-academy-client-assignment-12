import { useContext, useEffect, useState } from "react";
import useClasses from "../../../../../../Hooks/useClasses";
import useUserEmail from "../../../../../../Hooks/useUserEmail";
import axios from "axios";
import { AuthContext } from "../../../../../../Providers/AuthProvider";
import MyEnrolledClassesTd from "./MyEnrolledClassesTd";
import useAxiosSecure from "../../../../../../Hooks/useAxiosSecure";

const MyEnrolledClasses = () => {
  const [classes, isLoading] = useClasses(0);
  const { user, loading } = useContext(AuthContext);
  const { users, isUserLoading } = useUserEmail(user?.email);
  const [enrollments, setEnrollments] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/enrollment")
      .then((response) => {
        const filteredEnrollments = response.data.filter(
          (enrollment) => enrollment.student_id === users[0]?._id
        );
        setEnrollments(filteredEnrollments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [users]);

  return (
    <div className="mx-10">
      <table className="table border-2 border-green-400">
        {/* head */}
        <thead className="bg-green-400 text-white">
          <tr>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Instructor Email</th>
            <th className="whitespace-break-spaces">Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {enrollments?.map((enrollment) => (
            enrollment.status === "paid" &&(
            <MyEnrolledClassesTd
              key={enrollment._id}
              enrollment_id={enrollment._id}
              student_id={users[0]?._id}
              courseId={enrollment.class_id}
              status={enrollment.status}
            >
              {enrollment.class_id}
            </MyEnrolledClassesTd>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrolledClasses;
