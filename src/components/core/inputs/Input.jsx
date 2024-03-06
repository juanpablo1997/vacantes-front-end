import styles from "../inputs/InputClass.module.css";
import Button from "../buttons/Button";

const Input = ({ inputType, type, placeholder, buttonType, value }) => {
  let inputClass;

  switch (inputType) {
    case "input":
      inputClass = styles.input;
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <input className={inputClass} type={type} placeholder={placeholder} />
      <Button buttonType={buttonType}>Buscar</Button>
    </div>
  );
};

export default Input;
