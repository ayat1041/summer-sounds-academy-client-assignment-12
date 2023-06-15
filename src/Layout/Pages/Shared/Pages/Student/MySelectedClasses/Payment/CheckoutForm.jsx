import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { AuthContext } from "../../../../../../../Providers/AuthProvider";
import useAxiosSecure from "../../../../../../../Hooks/useAxiosSecure";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({
  price,
  classId,
  studentId,
  courseName,
  instructorEmail,
  enrollmentId,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      console.log(price);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        classId,
        studentId,
        courseName,
      };
      //   save payment to db
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // increase total students
          axios
            .post("https://summer-sounds-academy-server-ayat1041.vercel.app/increaseTotalStudents", {
              instructor_email: instructorEmail,
            })
            .then((response) => {
              console.log(response.data.message);
              console.log("instructor students updated");
              // increase total students and decrease available seats
              axios
                .patch(`https://summer-sounds-academy-server-ayat1041.vercel.app/classes/seats/enrolled/${classId}`, {})
                .then((response) => {
                  console.log("Class updated successfully:", response.data)
                  // change enrollment status
                  axios
                    .patch(`https://summer-sounds-academy-server-ayat1041.vercel.app/enrollment/payment/${enrollmentId}`, {})
                    .then((response) => {
                      console.log(
                        "Enrollment updated successfully:",
                        response.data
                      );
                      navigate("/dashboard/mySelectedClasses");
                    })
                    .catch((error) => {
                      console.error("Error updating enrollment:", error);
                    });
                })
                .catch((error) => {
                  console.error("Error updating class:", error);
                });
            })
            .catch((error) => {
              console.log("error in increasing student number");
              console.error(error);
            });
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full lg:w-full mx-auto">
        <CardElement
          className="mt-10"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-full text-right">
          <button
            className="btn btn-md btn-success mt-8 mx-auto"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            pay now
          </button>
        </div>
      </form>
      {cardError && (
        <div className="flex items-center gap-2 my-2 text-xs text-red-700">
          <MdError className="text-4xl animate-pulse" />
          <p>{cardError}</p>
        </div>
      )}
      {transactionId && (
        <div className="flex items-center gap-2 my-2 text-xs text-green-700">
          <p>payment completed with id: {transactionId}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
