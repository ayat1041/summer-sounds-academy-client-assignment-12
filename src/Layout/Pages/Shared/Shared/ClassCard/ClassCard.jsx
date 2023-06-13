import { FaDollarSign, FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { DarkModeContext } from "../../../../../Providers/DarkModeProvider";
import { useContext, useState } from "react";
import useUserEmail from "../../../../../Hooks/useUserEmail";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const ClassCard = ({ classItem, home }) => {
  const {
    _id,
    class_name,
    instructor_name,
    instructor_email,
    price,
    class_image,
    available_seats,
    enrolled_students,
  } = classItem;
  const { darkModeState } = useContext(DarkModeContext);
  const { user, loading } = useContext(AuthContext);
  const { users } = useUserEmail(user?.email);
  // console.log(users[0]?.role);
  // console.log(users[0]?._id);
  const handleEnroll = (class_id, student_id,instructor_email) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This course will be added to your selected courses',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(class_id);
        console.log(student_id);
  
        // Make a GET request to fetch all enrollments
        axios.get('http://localhost:5000/enrollment')
          .then((response) => {
            const enrollments = response.data;
  
            const isEnrolled = enrollments.some((enrollment) => {
              return (
                enrollment.class_id === class_id &&
                enrollment.student_id === student_id
              );
            });
  
            if (isEnrolled) {
              Swal.fire(
                'Already Enrolled',
                'You are already enrolled in this class.',
                'warning'
              );
            } else {
              axios.post('http://localhost:5000/enrollment', {
                class_id: class_id,
                student_id: student_id,
                status: 'to_be_paid'
              })
              .then((response) => {
                axios
                .post("http://localhost:5000/increaseTotalStudents", {
                  instructor_email: instructor_email,
                })
                .then((response) => {
                  console.log(response.data.message);
                })
                .catch((error) => {
                  console.error(error);
                });
                Swal.fire(
                  'Saved!',
                  'Please complete the payment to finish enrollment.',
                  'success'
                );
                console.log(response);
              })
              .catch((error) => {
                console.error(error);
                Swal.fire(
                  'Error',
                  'An error occurred during enrollment.',
                  'error'
                );
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              'Error',
              'An error occurred while fetching enrollments.',
              'error'
            );
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={class_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2
          className={`card-title text-2xl font-bold drop-shadow-md ${
            darkModeState ? "text-green-400" : "text-green-500"
          }`}
        >
          {class_name}
        </h2>
        <div className="flex justify-between items-center bg-[#1e690b63] p-2 rounded-md mt-auto">
          <div className="flex items-center">
            <FaUsers className="text-2xl" />
            <span>
              <h2 className="text-2xl px-2 font-bold">{enrolled_students}</h2>
            </span>
          </div>
          <div className="flex items-center px-4 border-x-2">
            <FaDollarSign className="text-xl" />
            <span>
              <h2 className="text-2xl px-0 font-medium text-green-500 drop-shadow-md">
                {price}
              </h2>
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <h2 className="text-md px-1 font-medium tracking-tighter">
                {instructor_name}
              </h2>
            </span>
            <GiTeacher
              className={`text-2xl ${
                darkModeState ? "text-green-400" : "text-slate-400"
              }`}
            />
          </div>
        </div>
        <div className="card-actions justify-between items-center mt-2">
          <button>
            <h1 className="font-medium text-green-200 text-md tracking-wide">
              Seats available{" "}
              <span className="text-2xl text-green-500 font-bold">
                {available_seats}
              </span>
            </h1>
          </button>
          {!home ? (
            <button
              disabled={users[0]?.role !== "student"}
              onClick={() => handleEnroll(_id,users[0]?._id,instructor_email)}
              className={`btn border-none disabled:bg-green-200 btn-sm hover:bg-green-950 font-bold text-white tracking-wide ${
                darkModeState ? "bg-green-500" : "bg-green-800"
              }`}
            >
              select
            </button>
          ) : (
            <Link
              to="/classes"
              className={`btn border-none disabled:bg-green-200 btn-sm hover:bg-green-950 font-bold text-white tracking-wide ${
                darkModeState ? "bg-green-500" : "bg-green-800"
              }`}
            >
              view all
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
