import styles from "./FormularioEditar.module.css";
import CampoTexto from "components/CampoTexto";
import ListaOpciones from "components/ListaOpciones";
import BotonGuardar from "components/BotonGuardar";
import BotonLimpiar from "components/BotonLimpiar";
import BotonCerrarFormulario from "components/BotonCerrarFormulario";
import { BsFillXCircleFill } from "react-icons/bs";

const FormularioEditar = () => {

  return (
    
    <section className={styles.container}>
      <span>
        <h2>EDITAR VIDEO</h2>
        <button><BsFillXCircleFill/></button>
      </span>
      <form className={styles.formulario}>
        <CampoTexto
          label="Título"
          placeholder="Ingresá un título para el video"
        />
        <ListaOpciones
          label="Categoría"
          placeholder="Seleccioná una categoría para el video"
        />
        <CampoTexto
          label="Imagen"
          placeholder="Ingresá la url de la imagen"

        />
        <CampoTexto
          label="Video"
          placeholder="Ingresá la url del video"

        />
        <CampoTexto
          label="Descripción"
          placeholder="Ingresá una descripción para el video"

        />
        <div className={styles.botones}>
          <button>Guardar</button>
          <button>Limpiar</button>
        </div>
      </form>
    </section>
  );
};

export default FormularioEditar;