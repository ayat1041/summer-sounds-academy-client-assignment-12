import { useEffect, useState } from "react";
import axios from "axios";

const useClassById = (classId) => {
  const [classData, setClassData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
        axios
          .get(`https://summer-sounds-academy-server-ayat1041.vercel.app/classes/${classId}`)
          .then((res) => {
            setClassData(res.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
  }, [classId]);

  return { classData, isLoading };
};

export default useClassById;