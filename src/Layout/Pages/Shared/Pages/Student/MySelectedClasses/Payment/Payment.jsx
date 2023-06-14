import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const classId = urlParams.get("classId");
  const instructorEmail = urlParams.get("instructorEmail");
  const price = urlParams.get("price");
  const studentId = urlParams.get("studentId");
  const courseName = urlParams.get("course_name");
  const enrollmentId = urlParams.get("enrollment_id");

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

    const handlePayment = () =>{
        console.log("payment completed");
    }

  return (
    <div className="w-[80%] mx-2 bg-green-200 p-4 px-10 rounded-lg shadow-lg border-8 border-green-100">
      <h2>class ID: {classId}</h2>
      <h2><span className="uppercase text-sm font-medium text-green-900">instructor mail - </span> {instructorEmail}</h2>
      <h2 className="text-xl font-bold"><span className="uppercase text-sm font-medium text-green-900">price - </span> ${price}</h2>
      <h2>student id: {studentId}</h2>
      <h2><span className="uppercase text-sm font-medium text-green-900">Course name - </span> {courseName}</h2>
      <div className="divider-horizontal w-full h-[1px] bg-opacity-10 bg-gray-950 mt-8 mx-auto"></div>
      <Elements stripe={stripePromise}>
      <CheckoutForm price={parseFloat(price)} enrollmentId={enrollmentId} classId={classId} studentId={studentId} courseName={courseName} instructorEmail={instructorEmail}></CheckoutForm>

      </Elements>
      {/* <button onClick={()=>handlePayment()} className="btn btn-md btn-neutral">Confirm payment</button> */}
    </div>
  );
};

export default Payment;
