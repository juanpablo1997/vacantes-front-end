import style from "../subTitles/SubTitleClass.module.css";

const SubTitle = ({ subTitleType, value }) => {
  let subTitleClass;
  switch (subTitleType) {
    case "xsTitle":
      subTitleClass = style.xsTitle;
      break;
    case "smallTitle":
      subTitleClass = style.smallTitle;
      break;
    case "bigTitle":
      subTitleClass = style.bigTitle;
      break;
    case "bigTitle2":
      subTitleClass = style.bigTitle2;
      break;
    default:
      subTitleClass = style.default;
      break;
  }

  return <h2 className={subTitleClass}>{value}</h2>;
};

export default SubTitle;
