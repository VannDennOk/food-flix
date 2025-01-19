import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Video from "components/Video";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
        <>
            <Banner img="favoritos" txt="Favoritos"></Banner>
            <section className={styles.container}>
                {favorito.length === 0 ? (
                    <h2 className={styles.mensaje}><BsExclamationTriangleFill />No se han seleccionado favoritos</h2>
                ) : (
                    favorito.map((fav) => (
                        <Video
                            {...fav}
                            key={fav.id}
                            datos={{
                                titulo: fav.titulo,
                                categoria: fav.categoria,
                                imagen: fav.imagen,
                                link: fav.link,
                                descripcion: fav.descripcion,
                                id: fav.id,
                            }}
                        />
                    ))
                )}
            </section>
        </>
    );
}

export default Favoritos;