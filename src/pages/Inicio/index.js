import { useState } from "react";
import styles from "./index.module.css";
import Hero from "components/Hero";
import Formulario from "components/Formulario";
import { useFormulario } from "context/FormularioContext";
import Categoria from "components/Categoría";
import ModalEditar from "components/ModalEditar";
import videosData from "data/videos.js";

//ESTAS EN LA RAMA MAIN
const categorias = [
    { tag: "Pastas", color: "#BF0404", sombra: "0px 0px 4px 1px rgba(191, 4, 4, 0.7)"},
    { tag: "Pizzas", color: "#F29F05", sombra: "0px 0px 4px 1px rgba(242, 159, 5, 0.7)"},
    { tag: "Ensaladas", color: "#83A603", sombra: "0px 0px 4px 1px rgba(131, 166, 3, 0.7)"}
];

function Inicio() {
    const { mostrarFormulario } = useFormulario();
    const [videos, setVideos] = useState(videosData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoAEditar, setVideoAEditar] = useState(null);
    const categoriasTags = categorias.map((categoria) => categoria.tag);

    const registrarVideo = (video) => setVideos([...videos, video]);

    const eliminarVideo = (id) => setVideos(videos.filter((video) => video.id !== id));

    const manejarEdicionVideo = (video) => {
        setVideoAEditar(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoAEditar(null);
    };

    const actualizarVideo = (videoActualizado) => {
        setVideos(videos.map((v) => (v.id === videoActualizado.id ? videoActualizado : v)));
        closeModal();
    };

    return (
        <div className={styles.container}>
            <Hero img="home" />
            <section className={styles.containerContenido}>
                {mostrarFormulario && (
                    <Formulario
                        categorias={categoriasTags}
                        registrarVideo={registrarVideo}
                    />
                )}

                {isModalOpen && videoAEditar && (
                    <ModalEditar
                        video={videoAEditar}
                        closeModal={closeModal}
                        categorias={categoriasTags}
                        actualizarVideo={actualizarVideo}
                    />
                )}

                <div className={styles.containerCategorias}>
                    {categorias.map((categoria) => (
                        <Categoria
                            datos={categoria}
                            key={categoria.tag}
                            videos={videos.filter((video) => video.categoria === categoria.tag)}
                            eliminarVideo={eliminarVideo}
                            manejarEdicionVideo={manejarEdicionVideo}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Inicio;