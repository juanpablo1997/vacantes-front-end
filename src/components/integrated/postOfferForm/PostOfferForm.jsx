/**
 * ====================
 * Estilos
 * ====================*/
import css from "../postOfferForm/PostOfferForm.module.css";

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
import ImagePostOffer from "../../../assets/img/postOfferFormImg.png";
import Button from "../../../components/core/buttons/Button";
import Input from "../../../components/core/inputsForms/InputForm";
import CustomSelect from "../../core/customSelect/CustomSelect";

/**
 * ==============================
 * Componente PostOfferForm.jsx
 * ==============================
 * Este componente renderiza un formulario para crear ofertas. */
const PostOfferForm = () => {
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [city, setCity] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const { setUserType, setExistingUser, setCloseSesion } =
    useContext(MyContext);
  const cities = ["Medellín", "Bogotá", "Cali", "Cartagena", "Barranquilla"];
  const jobsTypes = ["Remoto", "Presencial", "Semi-presencial"];

  /**
   *  Funcion para manejar el envió de los datos necesarios para el login
   *  email y contraseña
   */

  return (
    <div className={css.sectionContainer}>
      <div className={css.welcomeContainer}>
        <div className={css.titleWl}>
          <SubTitle subTitleType="bigTitle2" value="¡Contratamos!" />
        </div>
        <div className={css.subTitleWl}>
          <Typography
            textType="txtSecundaryCenter2"
            value="Crea tus ofertas 100% gratis"
          />
        </div>
        <div className={css.imageWl}>
          <Img imgType="medium" src={ImagePostOffer} alt="Imagen de login" />
        </div>
      </div>
      <div className={css.formContainer}>
        <div className={css.itemContainer}>
          <div className={css.titleFM}>
            <Title titleType="smallTitle2" value="Crear nueva oferta" />
          </div>
          <div className={css.subtTitleFM}>
            <Typography
              textType="txtSecundaryCenter1"
              value="Ingresa los datos solicitados"
            />
          </div>
          <div className={css.formFM}>
            <form className={css.form} id="form">
              <div className={css.form_inputs}>
                <Input
                  value={title}
                  inputType="general"
                  type="text"
                  placeholder="Nombre de la oferta ejm. Panadero"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className={css.fechas}>
                  <Typography
                    textType="txtSecundaryCenter1"
                    value="Desde:"
                  />
                  <Input
                    value={fromDate}
                    inputType="fecha"
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                  <Typography
                    textType="txtSecundaryCenter1"
                    value="Hasta:"
                  />
                  <Input
                    value={untilDate}
                    inputType="fecha"
                    type="date"
                    onChange={(e) => setUntilDate(e.target.value)}
                  />
                </div>
                <CustomSelect
                  text="Selecciona la ciudad donde se abre la oferta"
                  options={cities}
                  onChange={(e) => setCity(e.target.value)}
                />
                <CustomSelect
                  text="Selecciona la modalidad de la oferta"
                  options={jobsTypes}
                  onChange={(e) => setJobType(e.target.value)}
                />
                <Input
                  value={experience}
                  inputType="general"
                  type="number"
                  placeholder="Experiencia en meses"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className={css.buttonFM}>
                <Button buttonType="btnPrimary" type="submit">
                  Crear oferta
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOfferForm;
