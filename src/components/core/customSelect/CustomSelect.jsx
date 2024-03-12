/**
 * ====================
 * Estilos
 * ====================*/
import style from "../customSelect/CustomSelect.module.css";

/**
 * ==============================
 * Componente Register.jsx
 * ==============================
 * El componente CustomSelect es una versión personalizada del elemento select de HTML en React.
 *  Proporciona una interfaz de usuario para seleccionar una opción de una lista desplegable.  */
const CustomSelect = ({ text, options, ...props }) => {
  return (
    <select className={style.select} {...props} defaultValue={'DEFAULT'}>
      <option  value="DEFAULT" disabled>{text}</option>
      {options.map((option, index) => (
        <option className={style.option} key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
