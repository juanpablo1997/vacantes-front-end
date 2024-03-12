import css from "../inputsForms/InputForm.module.css";

const InputForm = ({ inputType, ...otherProps }) => {
  let inputClass;

  switch (inputType) {
    case "general":
      inputClass = css.general;
      break;
    case "fecha":
      inputClass = css.fecha;
      break;
    default:
      break;
  }

  return <input className={inputClass} {...otherProps} />;
};

export default InputForm;
