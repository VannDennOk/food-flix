import styles from "./Categoria.module.css";
import Video from "components/Video";

const Categoria = (props) => {

    const { tag, color, sombra } = props.datos
    const { videos, eliminarVideo } = props

    const colorBG = {
        backgroundColor: color
    }

    return <>
        {
            videos.length > 0 &&
            <section className={styles.container}>
                <h3 style={colorBG}>{tag}</h3>
                <div className={styles.videoBox}>
                    {
                        videos.map((video, index) => <Video
                            datos={video}
                            key={index}
                            color={color}
                            sombra={sombra}
                            eliminarVideo={eliminarVideo}
                        />)}
                </div>
            </section>
        }
    </>
};

export default Categoria;

