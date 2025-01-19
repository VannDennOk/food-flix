import { useState } from "react";
import styles from "./ModalEditar.module.css";
import CampoTexto from "components/CampoTexto";
import ListaOpciones from "components/ListaOpciones";
import { BsFillXCircleFill } from "react-icons/bs";

const ModalEditar = ({ video, closeModal, categorias, actualizarVideo }) => {

    const [titulo, setTitulo] = useState(video.titulo || "");
    const [imagen, setImagen] = useState(video.imagen || "");
    const [videoUrl, setVideoUrl] = useState(video.link || "");
    const [descripcion, setDescripcion] = useState(video.descripcion || "");
    const [categoria, setCategoria] = useState(video.categoria || "");

    const manejarGuardar = (e) => {
        e.preventDefault();

        // Crear un objeto con los datos actualizados
        const videoActualizado = {
            ...video,
            titulo,
            imagen,
            link: videoUrl,
            descripcion,
            categoria,
        };

        // Actualizar el video en la lista
        actualizarVideo(videoActualizado);
    };

    return (
        <div className={styles.overlay}>
            <dialog open className={styles.modal}>
                <div className={styles.titulo}>
                    <h2>EDITAR VIDEO</h2>
                    <button type="button" onClick={closeModal} className={styles.btnClose}><BsFillXCircleFill /></button>
                </div>
                <div className={styles.scroll}>
                    <div className={styles.texto}>
                        <h3>Completá el formulario para editar la tarjeta de video</h3>
                        <p>* Los campos con asterísco son obligatorios</p>
                        <p>Editando: {video.titulo}</p>
                    </div>
                    <form onSubmit={manejarGuardar} className={styles.formulario}>
                        <CampoTexto
                            label="Título *"
                            placeholder="Editá el título del video"
                            required
                            valor={titulo}
                            setValor={setTitulo}
                        />

                        <ListaOpciones
                            label="Categoría *"
                            placeholder="Seleccioná una categoría"
                            valor={categoria}
                            setCategoria={setCategoria}
                            categorias={categorias}
                        />

                        <CampoTexto
                            label="Imagen *"
                            placeholder="Editá la URL de la imagen"
                            required
                            valor={imagen}
                            setValor={setImagen}
                        />

                        <CampoTexto
                            label="Video *"
                            placeholder="Editá la URL del video"
                            required
                            valor={videoUrl}
                            setValor={setVideoUrl}
                        />
                        <CampoTexto
                            label="Descripción"
                            placeholder="Editá la descripción del video"
                            valor={descripcion}
                            setValor={setDescripcion}
                        />

                        <div className={styles.botones}>
                            <button type="submit" className={styles.botonGuardar} >Guardar</button>
                            <button type="button" className={styles.botonLimpiar} >Limpiar</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ModalEditar;