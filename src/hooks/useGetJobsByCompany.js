import { useState, useEffect } from "react";
import { getAllJobs } from "../services/axios";

const useObtenerTrabajos = () => {
  const [jobs, setJobs] = useState([]);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { company_id } = JSON.parse(localStorage.getItem("user"));
        const { data } = await getAllJobs(company_id);
        setJobs(data);
      } catch (err) {
        setValidate(true);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, validate};
};

export default useObtenerTrabajos;
