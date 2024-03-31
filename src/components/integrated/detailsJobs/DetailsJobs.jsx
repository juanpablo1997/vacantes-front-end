import css from "../detailsJobs/DetailsJobs.module.css";
import { useContext } from "react";
import { MyContext } from "../../../context/Context";
import SubTitle from "../../core/subTitles/SubTitle";

const DetailsJobs = () => {
  const { selectOffer } = useContext(MyContext);

  return (
    <div className={css.container}>
      <div>
        <SubTitle subTitleType="bigTitle" value={selectOffer.title} />
        <p>{selectOffer.city}</p>
      </div>
      <hr />
      <div>
        <br />
        <p>
          Somos una empresa líder en [industria/nicho], comprometida con la
          excelencia y la innovación. Estamos buscando talento apasionado y
          motivado para unirse a nuestro equipo en [ubicación].
        </p>
        <br />
        <SubTitle value="Requisitos" />
        <p>- Excelentes habilidades</p>
        <p>{`- Experiencia previa de ${selectOffer.experience}`}</p>
        <p>- Capacidad para trabajar en equipo</p>
        <br />
      </div>
      <div>
        <p>
          Si estás listo para enfrentar nuevos desafíos y contribuir al éxito de
          una empresa en crecimiento, ¡esperamos recibir tu solicitud! Por
          favor, envía tu currículum vitae y carta de presentació
        </p>
      </div>
    </div>
  );
};

export default DetailsJobs;
