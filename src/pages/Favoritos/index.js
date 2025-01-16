import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Video from "components/Video";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
    const { favorito } = useFavoritosContext();
    return (
        <>
            <Banner img="favoritos" txt="Favoritos"></Banner>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Video {...fav}
                        key={fav.id}
                        datos={{
                            titulo: fav.titulo,
                            categoria: fav.categoria,
                            imagen: fav.imagen,
                            link: fav.link,
                            descripcion: fav.descripcion,
                            id: fav.id
                        }}

                    />;
                })}
            </section>
        </>
    );
};

export default Favoritos;