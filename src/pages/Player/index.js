import { useState, useEffect } from "react";
import Banner from "components/Banner";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";

function Player() {
    const { id } = useParams();
    const [video, setVideo] = useState([]); // Estado para el video
    const [error, setError] = useState(false); // Estado para manejar errores

    useEffect(() => {
        // Llama al JSON Server para obtener el video por ID
        fetch(`http://localhost:3002/videos/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error ${response.status}: Video no encontrado");
                }
                return response.json();
            })
            .then((data) => {
                setVideo(data); // Guarda el video en el estado
                setError(false); // Asegúrate de que no haya error
            })
            .catch((err) => {
                console.error("Error al obtener el video:", err.message);
                setError(true); // Muestra el error
            });
    }, [id]);

    // Si hay error, muestra la página de NotFound
    if (error) return <NotFound />;

    // Si el video no ha cargado, muestra un mensaje de carga
    if (!video) return <div>Cargando...</div>;


    //if (!video) return <NotFound />;

    return (
        <>
            <Banner img="player" txt="Player" />
            <section className={styles.container}>
                <h2>{video.titulo}</h2>
                <iframe
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </section>
        </>
    );
}

export default Player;