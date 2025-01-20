import Banner from "components/Banner";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import videos from "data/videos.js";

function Player() {
    const parametros = useParams();
    const video = videos.find((video)=> video.id === Number(parametros.id));

    if (!video) return <NotFound />

    return (
        <>
            <Banner img="player" txt="Player"></Banner>

            <section className={styles.container}>
                <h2>{video.titulo}</h2>
                <h2>MODALES</h2>
                <iframe
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </section>
        </>
    );
};

export default Player;