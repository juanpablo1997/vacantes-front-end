import styles from "../typography/TypographyClass.module.css";

const Typography = ({ textType, value }) => {
  let textClass;

  switch (textType) {
    case "txtPrimaryLeft":
      textClass = styles.txtPrimaryLeft;
      break;
    case "txtPrimaryLeft2":
      textClass = styles.txtPrimaryLeft2;
      break;
    case "txtPrimaryJustify":
      textClass = styles.txtPrimaryJustify;
      break;
    case "txtSecundaryCenter1":
      textClass = styles.txtSecundaryCenter1;
      break;
    case "txtSecundaryCenter2":
      textClass = styles.txtSecundaryCenter2;
      break;
      case "txtboldBlack":
      textClass = styles.txtboldBlack;
      break;
    default:
      break;
  }

  return <p className={textClass}>{value}</p>;
};

export default Typography;
