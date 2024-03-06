/**
 * ====================
 * Estilos
 * ====================*/
import css from "../register/Register.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import md5 from "md5";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { routesList } from "../../../views/routes";
import { postDataCompany } from "../../../services/axios";
import AppFirebase from "../../../utils/firebase/credentials";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * ====================
 * Componentes
 * ====================*/
import Title from "../../../components/core/titles/Title";
import SubTitle from "../../../components/core/subTitles/SubTitle";
import Typography from "../../../components/core/typography/Typography";
import Img from "../../../components/core/imagen/Img";
import ImageWelcome from "../../../assets/img/Register.png";
import Button from "../../../components/core/buttons/Button";
import Input from "../../../components/core/inputsForms/InputForm";
import InputFile from "../../../components/core/inputsFile/InputFile";

/**
 * ==============================
 * Componente Register.jsx
 * ==============================
 * Este componente renderiza un formulario de registro para ingresar
 * empresas a la base de datos vacantes_react en la tabla company. */

const Register = () => {
  // Declaración de variables globales
  const storage = getStorage(AppFirebase);
  let urlImg;
  const [logo, setLogo] = useState(null);
  const [nameFile, setNameFile] = useState("");
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [uploadedFile, setUploadedFile] = useState(false);
  const [goLogin, setGoLogin] = useState(false);

  // Funcion que resetea todos los valores
  const resetValues = () => {
    // Limpiar inputs
    setNameFile("");
    setCompany("");
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setLogo("");
    setUploadedFile(false);
  };

  // Funcion para guardar en una variable la img y obtener el nombre del archivo seleccionado
  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    // Cargar en storage
    const fileRef = ref(storage, `documentos/${file.name}`);
    await uploadBytes(fileRef, file);

    // Obtener url de storage
    urlImg = await getDownloadURL(fileRef);
    setLogo(urlImg);
    setNameFile(file.name);
    setUploadedFile(true);
  };

  /**
   *  Funcion para manejar el envio de la informacion hacia la BD una vez se presione el botón "Crear"
   *  Si se ejecuta el try se validan los inputs para ver si están vacíos o no, si los valores no se
   *  han completado se mostrará una alerta de que hay campos vacios, sino se creará un objeto con el
   *  valor de todos los campos diligenciados. Y si se ejecuta el catch se mostrará una alerta con el
   *  error.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Objeto que contiene toda la información de la empresa para almacenar en el localStorage
    let dataCompany = { logo, company, username, email };

    try {
      if (!company || !username || !email || !password || !passwordConfirm) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title:
            "Hay campos vacíos. Por favor ingresa la información requerida",
          showConfirmButton: false,
          timer: 4000,
        });
      } else {
        if (password !== passwordConfirm) {
          setPassword("");
          setPasswordConfirm("");
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Las contraseñas no son iguales",
            showConfirmButton: false,
            timer: 4000,
          });
        } else {
          // Objeto que contiene la información a guardar en la BD
          const formData = { logo, company, username, email, password };

          // Se llama a la operacion POST del archivo axios
          const { data } = await postDataCompany(formData);

          Swal.fire({
            position: "center",
            icon: "success",
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
          });

          // Creamos 2 variables un objeto con los datos de la empresa y un id se de sesion
          dataCompany.id = await data.data.insertId;
          const idSession = await md5(
            dataCompany.id + dataCompany.email + dataCompany.username
          );

          // Guardamos estas variables en el localStorage
          localStorage.setItem("user", JSON.stringify(dataCompany));
          localStorage.setItem("idSession", idSession);

          // Asignamos true a goLogin para redireccionar
          setGoLogin(true);

          // Restablece todos los valores iniciales al finalizar la ejecución de la funcion
          resetValues();
        }
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 3000,
      });
      // Restablece todos los valores iniciales al finalizar la ejecución de la funcion
      resetValues();
    }
  };

  if (goLogin) {
    return <Navigate to={ routesList.myOffers } />;
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
            value="Registro 100% gratis"
          />
        </div>
        <div className={css.imageWl}>
          <Img imgType="medium" src={ImageWelcome} alt="Imagen de bienvenida" />
        </div>
      </div>
      <div className={css.formContainer}>
        <div className={css.itemContainer}>
          <div className={css.titleFM}>
            <Title titleType="smallTitle2" value="Crea una cuenta" />
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
                  value={company}
                  inputType="general"
                  type="text"
                  placeholder="Nombre de la empresa"
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Input
                  value={username}
                  inputType="general"
                  type="text"
                  placeholder="Nombre de usuario"
                  onChange={(e) => setUsername(e.target.value)}
                />
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
                <Input
                  value={passwordConfirm}
                  inputType="general"
                  type="password"
                  placeholder="Confirmar contraseña"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
              <div className={css.inputFileFM}>
                <InputFile
                  onChange={handleFileChange}
                  nameFile={nameFile}
                  uploadedFile={uploadedFile}
                />
              </div>
              <div className={css.linkLoginFM}>
                <Link to={routesList.login} style={{ textDecoration: "none" }}>
                  <Typography
                    textType="txtPrimaryLeft2"
                    value="¿Ya tienes una cuenta?"
                  />
                </Link>
              </div>
              <div className={css.buttonFM}>
                <Button buttonType="btnPrimary" type="submit">
                  Crear
                </Button>
              </div>
            </form>
          </div>
          <div className={css.textFM}>
            <Typography
              textType="txtSecundaryCenter1"
              value="Gracias por confiar en nosotros"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
