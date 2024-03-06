/**
 * ====================
 * Estilos
 * ====================*/
import css from "../imgPerfil/ImgPerfil.module.css";

/**
 * ====================
 * Componentes
 * ====================*/
import Img from "../imagen/Img";

const ImgPerfil = ({ imgPerfil }) => {
  return (
    <div className={css.container}>
        <Img imgType="icon" src={imgPerfil} alt="Imagen de perfil" />
    </div>
  );
};

export default ImgPerfil;
