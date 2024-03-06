import css from "../header/Header.module.css";
import Button from "../../core/buttons/Button";
import Typography from "../../core/typography/Typography";
import Title from "../../core/titles/Title";
import Input from "../../core/inputs/Input";
import { Link } from "react-router-dom";
import { routesList } from "../../../views/routes";

const Header = () => {
  const totalJobs = "90.000";

  return (
    <header className={css.header}>
      <div className={css.contentContainer}>
        <div className={css.itemsContainer}>
          <div className={css.items}>
            <div><Title titleType="smallTitle" value="¡En Trabajo Ya encuentra nuevas oportunidades!" /></div>
            <div><Link to={routesList.jobs}><Button buttonType="btnSecondary">Vacantes</Button></Link></div>
            <div><Input inputType="input" type="search" placeholder="Ingeniero, profesor, médico..." buttonType="btnInput" value="Buscar" /></div>
            <div><Typography textType="txtSecundaryCenter2" value={`Encuentra tu oportunidad en más de ${totalJobs} ofertas`} /></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
