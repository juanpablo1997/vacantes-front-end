/**
 * ====================
 * Estilos
 * ====================*/
import css from "../cardJob/CardJobs.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import { useState, useContext } from "react";
import formatearFecha from "../../../utils/functions/parseDate";
import calculationMonths from "../../../utils/functions/calculationMonths";

/**
 * ====================
 * Componentes
 * ====================*/
import SubTitle from "../subTitles/SubTitle";
import Button from "../buttons/Button";
import { MyContext } from "../../../context/Context";

/**
 * ==============================
 * Componente CardJob.jsx
 * ==============================
 * Este componente renderiza una tarjeta con información sobre el trabajo. */
const CardJob = ({ job }) => {
  const { setModal, setOffer, setSelectOffer } = useContext(MyContext);

  const handleChange = () => {
    //1. Actualiza el estado del modal para poder renderizarlo
    setModal(true)
    setOffer(job)
  }

  const handleClick = () => {
    setSelectOffer(job)
  }

  return (
    <div className={css.card} onClick={handleClick}>
      <div>
        <SubTitle value={job.title} />
      </div>
      <div>
        <p>{`Publicada el ${formatearFecha(job.from_date)}`}</p>
        <p>{`Ciudad donde se realiza la oferta ${job.city}`}</p>
        <p>{`Modalidad ${job.job_type}`}</p>
        <p>
          {calculationMonths(job.experience) <= 1
            ? `Se requieren como minímo 6 meses de experiencia.`
            : `Se requieren como minímo ${calculationMonths(
                job.experience
              )} años de experiencia.`}
        </p>
      </div>
      <div className={css.buttons}>
        <Button buttonType="btnPrimary">Eliminar</Button>
        <Button buttonType="btnPrimary" onClick={handleChange}>Editar</Button>
      </div>
    </div>
  );
};

export default CardJob;
