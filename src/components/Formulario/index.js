import { useState } from "react";
import styles from "./Formulario.module.css";
import Banner from "components/Banner";
import CampoTexto from "components/CampoTexto";
import ListaOpciones from "components/ListaOpciones";
import BotonGuardar from "components/BotonGuardar";
import BotonLimpiar from "components/BotonLimpiar";
import BotonCerrarFormulario from "components/BotonCerrarFormulario";

const Formulario = (props) => {

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [imagen, setImagen] = useState("")
  const [video, setVideo] = useState("")
  const [descripcion, setDescripcion] = useState("")

  const { registrarVideo } = props

  const manejarEnvio = (e) => {
    e.preventDefault()
    let datosAEnviar = {
      titulo,
      categoria,
      imagen,
      video,
      descripcion
    }
    registrarVideo(datosAEnviar)
  }

  const limpiarFormulario = () => {
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
  };

  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <Banner img="nuevovideo" txt="Nuevo Video"></Banner>
        <form className={styles.formulario} onSubmit={manejarEnvio}>
          <h2>Completá el formulario para crear una nuevas tarjetas de videos</h2>
          <h3>* Los campos con asterísco son obligatorios</h3>
          <CampoTexto
            label="Título *"
            placeholder="Ingresá un título para el video"
            required
            valor={titulo}
            setValor={setTitulo}
          />
          <ListaOpciones
            label="Categoría *"
            placeholder="Seleccioná una categoría para el video"
            required
            valor={categoria}
            setCategoria={setCategoria}
            categorias={props.categorias}
          />
          <CampoTexto
            label="Imagen *"
            placeholder="Ingresá la url de la imagen"
            required
            valor={imagen}
            setValor={setImagen}
          />
          <CampoTexto
            label="Video  *"
            placeholder="Ingresá la url del video"
            required
            valor={video}
            setValor={setVideo}
          />
          <CampoTexto
            label="Descripción"
            placeholder="Ingresá una descripción para el video"
            required={false}
            valor={descripcion}
            setValor={setDescripcion}
          />
          <div className={styles.botones}>
            <BotonGuardar>Guardar</BotonGuardar>
            <BotonLimpiar type="button" onClick={limpiarFormulario}>Limpiar</BotonLimpiar>
            <BotonCerrarFormulario type="button">Cerrar</BotonCerrarFormulario>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Formulario;