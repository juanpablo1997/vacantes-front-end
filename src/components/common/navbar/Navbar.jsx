/**
 * ====================
 * Estilos
 * ====================*/
import css from "../navbar/Navbar.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
//import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { routesList } from "../../../views/routes";
import { MyContext } from "../../../context/Context";
import { useContext, useState } from "react";

/**
 * ====================
 * Componentes
 * ====================*/
import Img from "../../core/imagen/Img";
import Button from "../../core/buttons/Button";
import logo from "../../../assets/img/logo.png";
import ImgPerfil from "../../core/imgPerfil/ImgPerfil";
import Typography from "../../core/typography/Typography";
import imgPerfilDefault from "../../../assets/img/perfilVacio.png";

/**
 * ==============================
 * Componente Navbar.jsx
 * ==============================
 * Este componente renderiza todas las opciones para navegar según seas su tipo de usuario */
const Navbar = ({ userType }) => {
  const { setUserType, existingUser, setExistingUser, setCloseSesion } =
    useContext(MyContext);
  const [imgPerfil, setImgPerfil] = useState(imgPerfilDefault);

  // Funcion para cerrar sesión. Resetea todas las variables implicadas en el proceso
  const logOut = () => {
    localStorage.clear();
    setCloseSesion(true);
    setExistingUser(null);
    setUserType("default");
    setImgPerfil(imgPerfil);
  };

  return (
    <nav className={css.nav}>
      <div>
        <Link to={routesList.homepage}>
          <Img imgType="logo" src={logo} alt="Logo ¡Trabajo Ya!" />
        </Link>
      </div>
      <ul className={css.ul}>
        {userType === "company" && (
          <>
            <li>
              <Link to={routesList.myOffers} style={{ textDecoration: "none" }}>
                <Typography
                  textType="txtSecundaryCenter2"
                  value="Nuestras ofertas"
                />
              </Link>
            </li>
            <li>
              <Link
                to={routesList.createOffer}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  textType="txtSecundaryCenter2"
                  value="Crear oferta"
                />
              </Link>
            </li>
          </>
        )}
        {userType === "person" && (
          <>
            <li>Option 4</li>
            <li>Option 5</li>
            <li>Option 6</li>
          </>
        )}
        {userType === "default" && (
          <>
            <li>
              <Link to={routesList.homepage} style={{ textDecoration: "none" }}>
                <Typography textType="txtSecundaryCenter2" value="Inicio" />
              </Link>
            </li>
            <li>Nosotros</li>
          </>
        )}
        {existingUser !== null ? (
          <Button buttonType="btnSpecial" onClick={logOut}>
            Cerrar sesión
          </Button>
        ) : (
          <>
            <Link to={routesList.login} style={{ textDecoration: "none" }}>
              <Button buttonType="btnSpecial">Iniciar Sesión</Button>
            </Link>
          </>
        )}
      </ul>
      {existingUser !== null ? (
        <ImgPerfil imgPerfil={existingUser.logo} />
      ) : (
        <ImgPerfil imgPerfil={imgPerfil} />
      )}
    </nav>
  );
};

export default Navbar;
