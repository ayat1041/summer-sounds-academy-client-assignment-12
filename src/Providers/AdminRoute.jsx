import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useUserEmail from "../Hooks/useUserEmail";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { users, isUserLoading } = useUserEmail(user?.email);


  const location = useLocation();
  if (loading || isUserLoading) {
    return <div className="w-full h-screen text-center"><h1 className="text-6xl">Checking if you are an admin</h1><progress className="progress w-56"></progress></div>;
  }
  if (users[0]?.role === 'admin') {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
