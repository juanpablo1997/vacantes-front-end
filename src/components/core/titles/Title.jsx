import styles from "../titles/TitleClass.module.css";

export const Title = ({ titleType, value }) => {
  let titleClass;
  switch (titleType) {
    case "smallTitle":
      titleClass = styles.smallTitle;
      break;
    case "bigTitle":
      titleClass = styles.bigTitle;
      break;
    case "smallTitle2":
      titleClass = styles.smallTitle2;
      break;

    default:
      break;
  }

  return <h1 className={titleClass}>{value}</h1>;
};

export default Title;
