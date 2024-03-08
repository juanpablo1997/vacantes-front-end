/**
 * ====================
 * Estilos
 * ====================*/
import css from "../points/Point.module.css";

/**
 * ====================
 * Componentes
 * ====================*/
import SubTitle from "../subTitles/SubTitle";
import Typography from "../typography/Typography";

/**
 * ================================
 * Componente Points.jsx
 * ================================
 * Este componente rendiriza un punto numerado con información al frente. */
const Point = ({ number, subtitle, value }) => {
  return (
    <div className={css.container}>
      <div className={css.number}>{number}</div>
      <div>
        <SubTitle subTitleType="xsTitle" value={subtitle} />
        <Typography textType="txtPrimaryLeft" value={value} />
      </div>
    </div>
  );
};

export default Point;
