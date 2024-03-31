/**
 * ====================
 * Estilos
 * ====================*/
import css from "../myOffers/MyOffers.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import md5 from "md5";
import Swal from "sweetalert2";
import { routesList } from "../routes";
import { Navigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { useState, useEffect, useContext } from "react";

/**
 * ====================
 * Componentes
 * ====================*/
import ProfileBar from "../../components/core/profileBar/ProfileBar";
import StepsCreateOffer from "../../components/integrated/stepsToCreateOffer/StepsCreateOffer";
import ListJobs from "../../components/integrated/listJobs/ListJobs";
import DetailsJobs from "../../components/integrated/detailsJobs/DetailsJobs";
import Title from "../../components/core/titles/Title";
import Modal from "../../components/integrated/modal/Modal";

/**
 * ==============================
 * Componente MyOffers.jsx
 * ==============================
 * Este componente renderiza la vista para las cuentas de las empresas */

const MyOffers = () => {
  // Declaración de variables globales
  const [name, setName] = useState("");
  const [goLogin, setGoLogin] = useState(false);
  const { closeSesion, existingUser, modal, offer } = useContext(MyContext);

  // Funcion para obtener la data de la empresa cargada en localStorage
  const loadDataCompanyLocalStorage = async () => {
    try {
      const { company, username, email, id } = await JSON.parse(
        localStorage.getItem("user")
      );
      const idSession = localStorage.getItem("idSession");

      setName(company);

      if (idSession !== md5(id + email + username)) {
        // Asignamos a goLogin el valor true para poder redireccionar
        setGoLogin(true);

        // Reseteamos el localStorage
        localStorage.clear();
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 3000,
      });

      // Reseteamos el localStorage
      localStorage.clear();
    }
  };

  useEffect(() => {
    if (existingUser) {
      loadDataCompanyLocalStorage();
    } else setGoLogin(true);
  }, [existingUser]);

  if (goLogin) {
    return <Navigate to={routesList.login} />;
  }

  if (closeSesion) {
    return <Navigate to={routesList.homepage} />;
  }

  return (
    <div className={css.container}>
      <ProfileBar name={name} />
      <StepsCreateOffer />
      <Title titleType="bigTitle" value="Ofertas activas" />
      <div className={css.jobs}>
        <ListJobs />
        <div className={css.modal}>{modal ? <Modal /> : <DetailsJobs />}</div>
      </div>
    </div>
  );
};

export default MyOffers;
