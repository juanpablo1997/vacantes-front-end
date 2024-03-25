import css from "../cardJob/CardJobs.module.css";

const CardJob = ({ job }) => {
  return (
    <div className={css.card}>
      <p>{job.title}</p>
      <p>{job.from_date}</p>
      <p>{job.until_date}</p>
      <p>{job.city}</p>
      <p>{job.job_type}</p>
      <p>{job.experience} meses de experiencia</p>
    </div>
  );
};

export default CardJob;
