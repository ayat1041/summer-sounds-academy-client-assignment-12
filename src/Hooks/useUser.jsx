import axios from "axios";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const useUser = (id) => {
  const [user, setUser] = useState({});
  const [isUserLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://summer-sounds-academy-server-ayat1041.vercel.app/users/${id}`)
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
