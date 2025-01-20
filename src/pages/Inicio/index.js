import { useState } from "react";
import styles from "./index.module.css";
import Hero from "components/Hero";
import Formulario from "components/Formulario";
import { useFormulario } from "context/FormularioContext";
import Categoria from "components/Categoría";
import ModalEditar from "components/ModalEditar";
import videosData from "data/videos.js";

//ESTAS EN LA RAMA MAIN

function Inicio() {
    const { mostrarFormulario } = useFormulario();
    const [videos, setVideos] = useState(videosData);

    //Lista de categorías
    const categorias = [
        {
            tag: "Pastas",
            color: "#BF0404",
            sombra: "0px 0px 4px 1px rgba(191, 4, 4, 0.7)"
        },

        {
            tag: "Pizzas",
            color: "#F29F05",
            sombra: "0px 0px 4px 1px rgba(242, 159, 5, 0.7)"
        },

        {
            tag: "Ensaladas",
            color: "#83A603",
            sombra: "0px 0px 4px 1px rgba(131, 166, 3, 0.7)"
        }
    ]

    //Registrar video
    const registrarVideo = (video) => {
        setVideos([...videos, video]);
    };

    //Eliminar video
    const eliminarVideo = (id) => {
        const nuevosVideos = videos.filter((video) => video.id !== id);
        setVideos(nuevosVideos);
    }

    //Modal - Formulario Editar Video
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoAEditar, setVideoAEditar] = useState(null);

    //Abre el modal y conecta el video a editar
    const manejarEdicionVideo = (video) => {
        setVideoAEditar(video);
        setIsModalOpen(true);
    };

    //Cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setVideoAEditar(null);
    };

    const actualizarVideo = (videoActualizado) => {
        setVideos(videos.map((v) => (v.id === videoActualizado.id ? videoActualizado : v)));
        closeModal(); // Cerrar modal después de actualizar
    };

    return (
        <div className={styles.container}>
            <Hero img="home" />
            <section className={styles.containerContenido}>
                {mostrarFormulario &&
                    <Formulario
                        categorias={categorias.map((categoria) => categoria.tag)}
                        registrarVideo={registrarVideo}
                    />
                }

                {isModalOpen && videoAEditar && (
                    <ModalEditar
                        video={videoAEditar}
                        closeModal={closeModal}
                        categorias={categorias.map((categoria) => categoria.tag)}
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
};

export default Inicio;