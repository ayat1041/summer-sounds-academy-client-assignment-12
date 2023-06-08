import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Pages/Shared/Layouts/Main";
import Home from "../Layout/Pages/Shared/Pages/Home/Home";
import Instructors from "../Layout/Pages/Shared/Pages/Instructors/Instructors";
import Classes from "../Layout/Pages/Shared/Pages/Classes/Classes";
import Login from "../Layout/Pages/Shared/Pages/Login/Login";
import SignUp from "../Layout/Pages/Shared/Pages/SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>Nothing in here</div>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/instructors",
            element: <Instructors></Instructors>
        },
        {
            path: "/classes",
            element: <Classes></Classes>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        }
    ]
  },
]);

export default router;