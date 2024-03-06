/**
 * ====================
 * Estilos
 * ====================*/
import css from "../registerCompany/RegisterCompany.module.css";

/**
 * ====================
 * Componentes
 * ====================*/
import Register from "../../components/integrated/register/Register";

/**
 * ==============================
 * Componente RegisterCompany.jsx
 * ==============================
 * Este componente página renderiza un componente llamado Register.*/

const RegisterCompany = () => {
  return (
    <div className={`${css.container}`}>
      <Register />
    </div>
  );
};

export default RegisterCompany;
