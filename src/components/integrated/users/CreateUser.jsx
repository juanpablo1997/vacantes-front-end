import layout from "../../layout/layout.grid.module.css";
import styles from "../users/CreateUser.module.css";
import Button from "../../core/buttons/Button";
import aspirante from "../../../assets/img/aspirantes.png";
import SubTitle from "../../core/subTitles/SubTitle";
import Img from "../../core/imagen/Img";
import { Link } from "react-router-dom";
import { routesList } from "../../../views/routes";

const CreateUser = () => {
  return (
    <div className={layout.createUserContainer}>
      <div className={layout.createUserInfoContainer}>
        <div>
          <SubTitle
            subTitleType="bigTitle"
            value="En ¡TRABAJO YA! te ayudamos a encontrar el trabajo de tus sueños"
          />
          <SubTitle value="Esta es tu oportunidad y aquí te podemos ayudar" />
          <p className={styles.text}>
            <span className={styles.span}>Registro gratuito.</span> Solo anímate
          </p>
          <p className={styles.text}>
            <span className={styles.span}>Nuevas ofertas cada día.</span>{" "}
            Empleos que se ajustan a tu perfil
          </p>
          <p className={styles.text}>
            <span className={styles.span}>Completa tu perfil.</span> Muestra tus
            capacidades
          </p>
          <Link to={routesList.login}>
            <Button buttonType="btnPrimary" value="Crea tu cuenta gratis" />
          </Link>
        </div>
      </div>
      <div className={layout.createUserImgContainer}>
        <Img imgType="big" src={aspirante} alt="Aspirante" />
      </div>
    </div>
  );
};

export default CreateUser;
