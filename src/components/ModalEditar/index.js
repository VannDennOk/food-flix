import { useState } from "react";
import styles from "./ModalEditar.module.css";
import Input from "components/Input";
import ListaOpciones from "components/ListaOpciones";
import { BsFillXCircleFill, BsFillFloppyFill, BsEraserFill } from "react-icons/bs";

const ModalEditar = ({ video, closeModal, categorias, actualizarVideo }) => {
    const [titulo, setTitulo] = useState(video.titulo || "");
    const [imagen, setImagen] = useState(video.imagen || "");
    const [videoUrl, setVideoUrl] = useState(video.link || "");
    const [descripcion, setDescripcion] = useState(video.descripcion || "");
    const [categoria, setCategoria] = useState(video.categoria || "");

    const manejarGuardar = (e) => {
        e.preventDefault();
        const videoActualizado = {
            ...video,
            titulo,
            imagen,
            link: videoUrl,
            descripcion,
            categoria,
        };
        actualizarVideo(videoActualizado);
    };

    // No vacía los campos, restablece a los datos originales.
    const manejarLimpiar = () => {
        setTitulo(video.titulo || "");
        setImagen(video.imagen || "");
        setVideoUrl(video.link || "");
        setDescripcion(video.descripcion || "");
        setCategoria(video.categoria || "");
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
                        <Input
                            tipo="text"
                            label="Título"
                            placeholder="Editá el título del video"
                            required={true}
                            valor={titulo}
                            setValor={setTitulo}
                        />
                        <ListaOpciones
                            label="Categoría"
                            placeholder="Seleccioná una categoría"
                            required={true}
                            valor={categoria}
                            setCategoria={setCategoria}
                            categorias={categorias}
                        />
                        <Input
                            tipo="url"
                            label="Imagen"
                            placeholder="Editá la URL de la imagen"
                            required={true}
                            valor={imagen}
                            setValor={setImagen}
                        />
                        <Input
                            tipo="url"
                            label="Video"
                            placeholder="Editá la URL del video"
                            required={true}
                            valor={videoUrl}
                            setValor={setVideoUrl}
                        />
                        <Input
                            tipo="texto"
                            label="Descripción"
                            placeholder="Editá la descripción del video"
                            required={false}
                            valor={descripcion}
                            setValor={setDescripcion}
                        />

                        <div className={styles.botones}>
                            <button type="submit" className={styles.botonGuardar} ><BsFillFloppyFill />Guardar</button>
                            <button type="button" onClick={manejarLimpiar} className={styles.botonLimpiar} ><BsEraserFill />Restablecer</button>
                            <button type="button" onClick={closeModal} className={styles.botonCerrar}><BsFillXCircleFill />Cerrar</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ModalEditar;