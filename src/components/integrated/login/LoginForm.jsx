/**
 * ====================
 * Estilos
 * ====================*/
import css from "../login/LoginForm.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import md5 from "md5";
import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { routesList } from "../../../views/routes";
import { MyContext } from "../../../context/Context";
import { postDataLogin } from "../../../services/axios";


/**
 * ====================
 * Componentes
 * ====================*/
import Title from "../../../components/core/titles/Title";
import SubTitle from "../../../components/core/subTitles/SubTitle";
import Typography from "../../../components/core/typography/Typography";
import Img from "../../../components/core/imagen/Img";
import ImageLogin from "../../../assets/img/loginCompany.png";
import Button from "../../../components/core/buttons/Button";
import Input from "../../../components/core/inputsForms/InputForm";

/**
 * ==============================
 * Componente LoginForm.jsx
 * ==============================
 * Este componente renderiza un formulario de inicio de sesion para
 * ingresar como un usuario registrado a la página web. */
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserType, setExistingUser, setCloseSesion } = useContext(MyContext);

  /**
   *  Funcion para manejar el envió de los datos necesarios para el login
   *  email y contraseña
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /** 
       * Si los campos están vacíos muestra una alerta en pantalla 
       * sino realiza la operación del postLogin */ 
      if (!email || !password) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Hay campos vacíos. Por favor ingresa la información requerida",
          showConfirmButton: false,
          timer: 4000,
        });
      } else {
        // 1. Crea un objeto con el email y la contraseña ingresadas en el formulario
        const request = { email, password };

        // 2. Realiza la petición a la BD y trae un objeto con toda la información de la empresa
        const { data } = await postDataLogin(request);

        // 3. Muestra una alerta con un msm de bienvenida
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bienvenido ${data.username}`,
          showConfirmButton: false,
          timer: 2000,
        });

        // 4. Crea una variable con el id de sesión para guardar en el localStorage
        const idSession = await md5(data.id + data.email + data.username);

        // 4.1 Cambio el userType a "company" para mostrar las opciones de empresas
        const userType = "company";

        // 5. Guarda en localStorage
        localStorage.setItem("userType", userType);
        localStorage.setItem("idSession", idSession);
        localStorage.setItem("user", JSON.stringify(data));

        // 6. Asigna true a redirection para redireccionar a MyOffers.jsx
        setRedirect(true);

        // 7. Actualizo el tipo de usuario para las opciones del navbar
        setUserType(userType);
        setExistingUser(JSON.parse(localStorage.getItem("user")))

        //8. Reseteo el closeSesion a false para que se pueda redirigir a el homepage cada vez que se cierre sesión
        setCloseSesion(false)
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message.includes("401")
          ? "Correo o contraseña invalidos"
          : error.message,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  if (redirect) {
    return <Navigate to={routesList.myOffers} />;
  }

  return (
    <div className={css.sectionContainer}>
      <div className={css.welcomeContainer}>
        <div className={css.titleWl}>
          <SubTitle subTitleType="bigTitle2" value="¡Bienvenido!" />
        </div>
        <div className={css.subTitleWl}>
          <Typography
            textType="txtSecundaryCenter2"
            value="Disfruta tu experiencia"
          />
        </div>
        <div className={css.imageWl}>
          <Img imgType="medium" src={ImageLogin} alt="Imagen de login" />
        </div>
      </div>
      <div className={css.formContainer}>
        <div className={css.itemContainer}>
          <div className={css.titleFM}>
            <Title titleType="smallTitle2" value="Inicio de Sesión" />
          </div>
          <div className={css.subtTitleFM}>
            <Typography
              textType="txtSecundaryCenter1"
              value="Ingresa los datos solicitados"
            />
          </div>
          <div className={css.formFM}>
            <form className={css.form} onSubmit={handleSubmit} id="form">
              <div className={css.form_inputs}>
                <Input
                  value={email}
                  inputType="general"
                  type="email"
                  placeholder="Correo electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  value={password}
                  inputType="general"
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={css.linkLoginFM}>
                <Link
                  to={routesList.registerCompany}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    textType="txtPrimaryLeft2"
                    value="¿No tienes una cuenta?"
                  />
                </Link>
              </div>
              <div className={css.buttonFM}>
                <Button buttonType="btnPrimary" type="submit">
                  Iniciar sesión
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
