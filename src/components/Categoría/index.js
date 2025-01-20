import styles from "./Categoria.module.css";
import Video from "components/Video";

const Categoria = ({ datos, videos, eliminarVideo, manejarEdicionVideo }) => {
    const { tag, color, sombra } = datos;

    return (
        videos.length > 0 && (
            <section className={styles.container}>
                <h3 style={{ backgroundColor: color }}>{tag}</h3>
                <div className={styles.videoBox}>
                    {videos.map((video) => (
                        <Video
                            datos={video}
                            key={video.id}
                            color={color}
                            sombra={sombra}
                            eliminarVideo={eliminarVideo}
                            manejarEdicionVideo={manejarEdicionVideo}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Categoria;

