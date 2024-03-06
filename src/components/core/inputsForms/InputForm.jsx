import css from "../inputsForms/InputForm.module.css";

const InputForm = ({ inputType, ...otherProps }) => {
  let inputClass;

  switch (inputType) {
    case "general":
      inputClass = css.general;
      break;
    default:
      break;
  }

  return <input className={inputClass} {...otherProps} />;
};

export default InputForm;
