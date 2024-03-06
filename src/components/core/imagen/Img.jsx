import styles from "../imagen/ImgClass.module.css";

const Img = ({ imgType, src, alt }) => {
  let imgClass;

  switch (imgType) {
    case "logo":
      imgClass = styles.logo;
      break;
    case "big":
      imgClass = styles.big;
      break;
    case "medium":
      imgClass = styles.medium;
      break;
    case "icon": 
      imgClass = styles.icon;
      break;
    default:
      imgClass = styles.default;
      break;
  }

  return <img className={imgClass} src={src} alt={alt} />;
};

export default Img;
