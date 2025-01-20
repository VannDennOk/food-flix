import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Video from "components/Video";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
    const { favorito: favoritos } = useFavoritosContext();

    return (
        <>
            <Banner img="favoritos" txt="Favoritos" />
            <section className={styles.container}>
                {favoritos.length === 0 ? (
                    <h2 className={styles.mensaje}>
                        <BsExclamationTriangleFill />No se han seleccionado favoritos
                    </h2>
                ) : (
                    favoritos.map((video) => (
                        <Video
                            key={video.id}
                            datos={{
                                titulo: video.titulo,
                                categoria: video.categoria,
                                imagen: video.imagen,
                                link: video.link,
                                descripcion: video.descripcion,
                                id: video.id,
                            }}
                        />
                    ))
                )}
            </section>
        </>
    );
}

export default Favoritos;