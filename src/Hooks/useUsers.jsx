import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const useUsers = (lim, userRole, userEmail) => {
  const limit = lim || 0;
  const role = userRole || "";
  const email = userEmail || "";

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", limit, role, email],
    queryFn: async () => {
      const response = await axios.get(
        `https://summer-sounds-academy-server-ayat1041.vercel.app/users?popular=desc&lim=${limit}&role=${role}&email=${email}`
      );
      return response.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [limit, role, email, refetch]);

  return [users, isLoading,refetch];
};

export default useUsers;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// const useUsers = (lim,userRole,userEmail) => {
//   const [users, setUsers] = useState([]);
//   const [isUserLoading, setLoading] = useState(true);
//     const limit = lim || 0;
//     const role = userRole || "";
//     const email = userEmail || "";
//     console.log("role",role);

//   // const{refetch, data} = useQuery({
//   //   queryKey: []
//   // })

//   useEffect(() => {
//     axios
//       .get(`https://summer-sounds-academy-server-ayat1041.vercel.app/users?popular=desc&lim=${limit}&role=${role}&email=${email}`)
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return [users, isUserLoading];
// };

// export default useUsers;
