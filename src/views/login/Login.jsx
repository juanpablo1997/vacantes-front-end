/**
 * ====================
 * Estilos
 * ====================*/
import css from "../login/Login.module.css";

/**
 * ====================
 * Componentes
 * ====================*/
import LoginForm from "../../components/integrated/login/LoginForm";

/**
 * ==============================
 * Componente Login.jsx
 * ==============================
 * Este componente página renderiza un componente para el inicio de sesión */
const Login = () => {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
