/**
 * ====================
 * Estilos
 * ====================*/
import css from "../listJobs/ListJobs.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/axios";

/**
 * ====================
 * Componentes
 * ====================*/
import Button from "../../core/buttons/Button";
import CardJob from "../../core/cardJob/CardJob";

/**
 * ==============================
 * Componente ListJobs.jsx
 * ==============================
 * Este componente lista todas las ofertas activas por la empresa. */
const ListJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [validate, setValidate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchJobs = async () => {
    try {
      const { company_id } = JSON.parse(localStorage.getItem("user"));
      const { data } = await getAllJobs(company_id, currentPage);
      setJobs(data);
    } catch (err) {
      setValidate(true);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const remainingData = jobs.length % 5; // Verifica si hay datos restantes en la página actual
    if (remainingData === 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className={css.container}>
      <div className={css.containerItems}>
        <div className={css.containerListJobs}>
          {validate ? (
            <p className={css.message}>
              No hay ofertas activas en este momento
            </p>
          ) : (
            jobs.map((job) => <CardJob key={job.job_id} job={job} />)
          )}
        </div>
        <div className={css.containerPagination}>
          <Button
            buttonType="btnPrimary"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <Button buttonType="btnPrimary" onClick={handleNext}>
            siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListJobs;
