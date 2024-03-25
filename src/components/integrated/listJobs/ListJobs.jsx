import useObtenerTrabajos from "../../../hooks/useGetJobsByCompany";
import CardJob from "../../core/cardJob/CardJob";

const ListJobs = () => {
  const { jobs, validate } = useObtenerTrabajos();

  return (
    <div>
      <h2>Mis ofertas</h2>
      {validate ? (
        <p>No hay vacantes</p>
      ) : (
        jobs.map((job) => <CardJob key={job.job_id} job={job} />)
      )}
    </div>
  );
};

export default ListJobs;
