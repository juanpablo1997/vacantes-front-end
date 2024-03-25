/**
 * ====================
 * Estilos
 * ====================*/
import css from "../listJobs/ListJobs.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import useObtenerTrabajos from "../../../hooks/useGetJobsByCompany";

/**
 * ====================
 * Componentes
 * ====================*/
import CardJob from "../../core/cardJob/CardJob";
import Title from "../../core/titles/Title";

/**
 * ==============================
 * Componente ListJobs.jsx
 * ==============================
 * Este componente lista todas las ofertas activas por la empresa. */
const ListJobs = () => {
  const { jobs, validate } = useObtenerTrabajos();

  return (
    <div className={css.container}>
      <Title titleType="bigTitle" value="Ofertas activas" />
      <div className={css.containerListJobs}>
        {validate ? (
          <p className={css.message}>No hay ofertas activas en este momento</p>
        ) : (
          jobs.map((job) => <CardJob key={job.job_id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default ListJobs;
