import css from "../detailsJobs/DetailsJobs.module.css";
import { useContext } from "react";
import { MyContext } from "../../../context/Context";

const DetailsJobs = () => {
  const { selectOffer } = useContext(MyContext);

  return (
    <div className={css.container}>
      <p>{selectOffer.title}</p>
    </div>
  );
};

export default DetailsJobs;
