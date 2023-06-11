import axios from "axios";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const useUsers = (lim,userRole,userEmail) => {
  const [users, setUsers] = useState([]);
  const [isUserLoading, setLoading] = useState(true);
    const limit = lim || 0;
    const role = userRole || "";
    const email = userEmail || "";
    console.log("role",role);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users?popular=desc&lim=${limit}&role=${role}&email=${email}`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [users, isUserLoading];
};

export default useUsers;
