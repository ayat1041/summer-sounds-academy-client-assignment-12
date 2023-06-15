import axios from "axios";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const useClassesApproved = (approved,lim,desc) => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const limit = lim || 0;
    const sort = desc || false;
    const approval = approved || false;
  useEffect(() => {
    axios
      .get(`https://summer-sounds-academy-server-ayat1041.vercel.app/classes?sort=${sort}&lim=${limit}&approval=${approval}`)
      .then((res) => {
        setClasses(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [classes, isLoading];
};

export default useClassesApproved;
