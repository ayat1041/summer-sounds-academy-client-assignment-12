import axios from "axios";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const useUser = (id) => {
  const [user, setUser] = useState({});
  const [isUserLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [user, isUserLoading];
};

export default useUser;
