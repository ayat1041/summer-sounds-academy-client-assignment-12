import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Pages/Shared/Layouts/Main";
import Home from "../Layout/Pages/Shared/Pages/Home/Home";
import Instructors from "../Layout/Pages/Shared/Pages/Instructors/Instructors";
import Classes from "../Layout/Pages/Shared/Pages/Classes/Classes";
import Login from "../Layout/Pages/Shared/Pages/Login/Login";
import SignUp from "../Layout/Pages/Shared/Pages/SignUp/SignUp";
import Dashboard from "../Layout/Pages/Shared/Layouts/Dashboard/Dashboard";
import MySelectedClasses from "../Layout/Pages/Shared/Pages/Student/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Layout/Pages/Shared/Pages/Student/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../Layout/Pages/Shared/Pages/Student/PaymentHistory/PaymentHistory";
import Instructor from "../Layout/Pages/Shared/Pages/Instructor/Instructor";
import ManageClasses from "../Layout/Pages/Shared/Pages/admin/ManageClasses/ManageClasses";
import ManageUsers from "../Layout/Pages/Shared/Pages/admin/ManageUsers/ManageUsers";
import AddClass from "../Layout/Pages/Shared/Pages/InstructorDash/AddClass/AddClass";
import MyClasses from "../Layout/Pages/Shared/Pages/InstructorDash/MyClasses/MyClasses";
import Payment from "../Layout/Pages/Shared/Pages/Student/MySelectedClasses/Payment/Payment";
import UpdateClass from "../Layout/Pages/Shared/Pages/InstructorDash/UpdateClass/UpdateClass";
import ErrorPage from "../Layout/Pages/Shared/Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../Providers/PrivateRoute";
import AdminRoute from "../Providers/AdminRoute";
import InstructorRoute from "../Providers/InstructorRoute";
import StudentRoute from "../Providers/StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/instructor/:id",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "mySelectedClasses",
        element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>,
      },
      {
        path: "myEnrolledClasses",
        element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>,
      },
      {
        path: "paymentHistory",
        element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>,
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      // admin route
      {
        path: "manageClasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      // instructor
      {
        path: "addAClass",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: "myClasses",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: "updateClass/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({params})=> fetch(`https://summer-sounds-academy-server-ayat1041.vercel.app/classes/${params.id}`)
      }
    ],
  },
]);

export default router;
