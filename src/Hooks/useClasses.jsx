import axios from "axios";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const useClasses = (lim,desc) => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const limit = lim || 0;
    const sort = desc || false;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/classes?sort=${sort}&lim=${limit}`)
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

export default useClasses;
