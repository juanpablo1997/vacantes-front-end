import styles from "../buttons/ButtonClass.module.css";

const Button = ({ buttonType, children, ...otherProps }) => {
  let buttonClass;

  switch (buttonType) {
    case "btnPrimary":
      buttonClass = styles.btnPrimary;
      break;
    case "btnSecondary":
      buttonClass = styles.btnSecondary;
      break;
    case "btnInput":
      buttonClass = styles.btnInput;
      break;
    case "btnSpecial":
      buttonClass = styles.btnSpecial;
      break;
    default:
      buttonClass = styles.btnDefault;
      break;
  }

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
