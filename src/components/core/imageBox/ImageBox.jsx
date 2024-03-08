import css from "../imageBox/ImageBox.module.css";
import Img from "../imagen/Img";

const ImageBox = ({ src }) => {
  return (
    <div className={css.container}>
        <Img imgType="imgBox" src={src} alt={"Logo de empresa"}/>
    </div>
  )
}

export default ImageBox