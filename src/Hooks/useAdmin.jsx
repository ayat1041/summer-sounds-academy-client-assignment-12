// import { useQuery } from "@tanstack/react-query";
// import { useContext, useState } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import axios from "axios";
// import useUserEmail from "./useUserEmail";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useUserEmail from "./useUserEmail";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { users, isUserLoading } = useUserEmail(user?.email);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (!isUserLoading && users && users.length > 0) {
      const userRole = users[0].role;
      setIsAdmin(userRole === "admin");
      setIsInstructor(userRole === "instructor");
      setIsStudent(userRole === "student");
    }
  }, [isUserLoading, users]);

  return { isAdmin, isInstructor, isStudent, isAdminLoading: isUserLoading };
};

export default useAdmin;