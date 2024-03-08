/**
 * ====================
 * Estilos
 * ====================*/
import css from "../stepsToCreateOffer/StepsCreateOffer.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import { Link } from "react-router-dom";
import { routesList } from "../../../views/routes";

/**
 * ====================
 * Componentes
 * ====================*/
import Img from "../../core/imagen/Img";
import Title from "../../core/titles/Title";
import Button from "../../core/buttons/Button";
import Point  from "../../core/points/Point";
import SubTitle from "../../core/subTitles/SubTitle";
import createOfferImg from "../../../assets/img/createOffer.png";

/**
 * ================================
 * Componente StepesCreateOffer.jsx
 * ================================
 * Este componente rendiriza la información sobre como
 * crear ofertas en el sitio. */
const StepsCreateOffer = () => {
  return (
    <div className={css.container}>
      <div className={css.grid}>
        <div className={css.title}>
            <Title titleType="bigTitle" value="¡Publica tus ofertas gratis!" />
        </div>
        <div className={css.subtitle}>
            <SubTitle subTitleType="smallTitle" value="Ahorra costos y tiempo en tus procesos de selección y consigue el candidato ideal de forma rápida y fácil" />
        </div>
        <div className={css.button}>
            <Link to={routesList.createOffer}><Button buttonType="btnSpecial">Crear oferta</Button></Link>
        </div>
        <div className={css.img}>
            <Img imgType="medium" src={createOfferImg} alt={`Imagen ${createOfferImg}`}/>
        </div>
        <div className={css.information}>
            <div className={css.points}>
               <Point number="1" subtitle="Publica tu oferta" value="Crea fácilmente tu oferta de trabajo y publícala en un click." />
               <Point number="2" subtitle="Revisa las postulaciones" value="Selecciona a los mejores candidatos entre todos CVs recibicidos." />
               <Point number="3" subtitle="Contrata" value="Encuentra al candidato que mejor se adapta al perfil buscado." />
            </div>
        </div>
      </div>
    </div>
  );
};

export default StepsCreateOffer;
