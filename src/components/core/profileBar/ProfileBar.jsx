/**
 * ====================
 * Estilos
 * ====================*/
import css from "../profileBar/ProfileBar.module.css";

/**
 * ====================
 * Componentes
 * ====================*/
import Typography from "../typography/Typography";

const ProfileBar = ({ name }) => {
  return (
    <div className={css.profileBar}>
      <Typography textType="txtboldBlack" value={`Usuario: ${name}`} />
    </div>
  );
};

export default ProfileBar;
