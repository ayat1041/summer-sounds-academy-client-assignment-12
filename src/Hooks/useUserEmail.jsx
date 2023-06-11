import axios from "axios";
import { useEffect, useState } from "react";

const useUserEmail = (userEmail) => {
  const [users, setUsers] = useState([]);
  const [isUserLoading, setLoading] = useState(true);
  const email = userEmail;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users?email=${email}`);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (email) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [email]);

  return { users, isUserLoading };
};

export default useUserEmail;
