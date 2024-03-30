import css from "../modal/Modal.module.css";

import { MyContext } from "../../../context/Context";
import Typography from "../../core/typography/Typography";
import Button from "../../core/buttons/Button";
import Input from "../../core/inputsForms/InputForm";
import { useState, useContext } from "react";
import CustomSelect from "../../core/customSelect/CustomSelect";
import Title from "../../core/titles/Title";



const Modal = () => {
    const [title, setTitle] = useState("");
    const [from_date, setFromDate] = useState("");
    const [until_date, setUntilDate] = useState("");
    const [city, setCity] = useState("");
    const [job_type, setJobType] = useState("");
    const [experienceString, setExperience] = useState("");
    const { modal, setModal } = useContext(MyContext);

      // Listas para componentes CustomSelect
  const cities = ["Medellín", "Bogotá", "Cali", "Cartagena", "Barranquilla"];
  const jobsTypes = ["Remoto", "Presencial", "Semi-presencial"];

  const handleSubmit = () => {

  }
    
  return (
    <div className={css.container}>
        <Title titleType="smallTitle" value="Actualizar oferta" />
         <div className={css.formFM}>
            <form className={css.form} onSubmit={handleSubmit}>
              <div className={css.form_inputs}>
                <Input
                  value={title}
                  inputType="general"
                  type="text"
                  placeholder="Nombre de la oferta ejm. Panadero"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className={css.fechas}>
                  <Typography textType="txtSecundaryCenter1" value="Desde:" />
                  <Input
                    value={from_date}
                    inputType="fecha"
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                  <Typography textType="txtSecundaryCenter1" value="Hasta:" />
                  <Input
                    value={until_date}
                    inputType="fecha"
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setUntilDate(e.target.value)}
                  />
                </div>
                <CustomSelect
                  text="Selecciona la ciudad donde se abre la oferta"
                  options={cities}
                  onChange={(e) => setCity(e.target.value)}
                />
                <CustomSelect
                  text="Selecciona la modalidad de la oferta"
                  options={jobsTypes}
                  onChange={(e) => setJobType(e.target.value)}
                />
                <Input
                  value={experienceString}
                  inputType="general"
                  type="number"
                  placeholder="Experiencia en meses"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className={css.buttonFM}>
                <Button buttonType="btnPrimary" type="submit">
                  Actualizar
                </Button>
                <Button buttonType="btnPrimary" onClick={() => setModal(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
    </div>
  )
}

export default Modal