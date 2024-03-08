/**
 * ====================
 * Estilos
 * ====================*/
import css from "../companies/Companies.module.css";

/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import { useState, useEffect } from "react";
import AppFirebase from "../../../utils/firebase/credentials";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

/**
 * ====================
 * Componentes
 * ====================*/
import ImageBox from "../../core/imageBox/ImageBox";
import Typography from "../../core/typography/Typography";

/**
 * ==============================
 * Componente Companies.jsx
 * ==============================
 * Este componente renderiza un listado de 8 logos de las empresas
 * que tienen ofertas publicadas en el sitio. */
const Companies = () => {
  const storage = getStorage(AppFirebase);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // 1. Funcion para guardar en una variable la img y obtener el nombre del archivo seleccionado
    const fetchImages = async () => {
      try {
        // Referencia a la carpeta en Storage donde están las imágenes
        const storageRef = ref(storage, "documentos");
        const imageRefs = await listAll(storageRef);
        const urls = [];
        await Promise.all(
          imageRefs.items.slice(0, 10).map(async (image) => {
            const url = await getDownloadURL(image);
            urls.push(url);
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error al obtener imágenes:", error);
      }
    };

    // Llama a la función para obtener las imágenes cuando el componente se monta
    fetchImages();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.grid}>
        {imageUrls.map((url, index) => (
          <ImageBox key={index} src={url} />
        ))}
      </div>
      <Typography textType="txtSecundaryCenter1" value={`Hoy hay ${imageUrls.length} empresas que están contratando y que tienen las mejores ofertas para ti`} />
    </div>
  );
};

export default Companies;
