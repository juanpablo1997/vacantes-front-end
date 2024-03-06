import css from "../jobs/CreateJob.module.css";
import SubTitle from "../../core/subTitles/SubTitle";
import Typography from "../../core/typography/Typography";
import Button from "../../core/buttons/Button";
import { Link } from "react-router-dom";
import { routesList } from "../../../views/routes";

const CreateJob = () => {
  return (
    <div className={css.createJob}>
      <div className={css.title}><SubTitle subTitleType="bigTitle" value="Publica tus ofertas en el portal de empleo" /></div>
      <div className={css.subTitle}><SubTitle value="Encuentra el mejor talento para tu empresa" /></div>
      <div className={css.informationContainer}>
        <div className={css.items}>
          <div className={css.item1}>
            <SubTitle subTitleType="xsTitle" value="Publica tus ofertas" />
            <Typography textType="txtSecundaryCenter1" value="De Crea y publica tus vacantes de manera fácil y a un click" />
          </div>
          <div className={css.item2}>
            <SubTitle subTitleType="xsTitle" value="Revisa las postulaciones" />
            <Typography textType="txtSecundaryCenter1" value="Selecciona los mejores candidatos entre todos los postulantes" />
          </div>
          <div className={css.item3}>
            <SubTitle subTitleType="xsTitle" value="Contrata" />
            <Typography textType="txtSecundaryCenter1" value="Encuentra el mejor candidato para ocupar tu vacante" />
          </div>
        </div>
      </div>
      <div className={css.button}><Link to={routesList.registerCompany}><Button buttonType="btnPrimary">Registrar empresa gratis</Button></Link></div>
    </div>
  );
};

export default CreateJob;
