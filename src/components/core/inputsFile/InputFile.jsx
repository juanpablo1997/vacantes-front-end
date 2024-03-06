import css from "./InputFileClass.module.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputFile = ({ nameFile, uploadedFile, ...props }) => {
  return (
    <button className={uploadedFile === false  ? css.container : css.uploadedFile} {...props}>
      <FontAwesomeIcon icon={faFile} className={css.icon} />
      {nameFile === "" ? "Adjuntar logo de la empresa" : nameFile}
      <input type="file" className={css.input} {...props} />
    </button>
  );
};

export default InputFile;
