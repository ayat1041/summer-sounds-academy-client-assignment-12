import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  // const { users, isUserLoading } = useUserEmail(user?.email);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/payments?email=${user?.email}`)
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <div className="mx-10">
      <table className="table border-2 border-green-400">
        {/* head */}
        <thead className="bg-green-400 text-white">
          <tr>
            <th>Class Name</th>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.courseName}</td>
              <td>{payment.date}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.price}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
