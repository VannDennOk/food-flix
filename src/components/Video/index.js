import { useFavoritosContext } from "context/Favoritos";
import styles from "./Video.module.css";
import iconoFavoritoSelected from "./favorito-selected.svg";
import iconoFavorito from "./favorito.svg";
import { BsTrashFill, BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Video = ({ datos, tag, color, sombra, eliminarVideo, manejarEdicionVideo }) => {

    const { id, titulo, categoria, imagen, link, descripcion } = datos;
    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(fav => fav.id === id);
    const icon = isFavorito ? iconoFavoritoSelected : iconoFavorito;

    const colorBorde = {
        borderColor: color,
        boxShadow: sombra
    };

    const handleFavoritoClick = () => {
        agregarFavorito({ id, titulo, imagen });
    };

    const handleEliminarClick = () => {
        eliminarVideo(id);
    };

    const handleEditarClick = () => {
        manejarEdicionVideo({ id, titulo, categoria, imagen, link, descripcion });
    };

    return (
        <div className={styles.containerShadow}>
            <div className={styles.container} style={colorBorde}>
                <Link className={styles.link} to={`/${id}`}>
                    <img src={imagen} alt={titulo} className={styles.imagen} />
                    <h2>{titulo}</h2>
                </Link>
                <span>
                    <img
                        src={icon}
                        alt="Icono Favorito"
                        className={styles.favorito}
                        onClick={handleFavoritoClick}
                    />
                </span>
                <div className={styles.cardFooter}>
                    <span
                        className={styles.icon}
                        onClick={handleEliminarClick}>
                        <BsTrashFill /><p>Eliminar</p>
                    </span>
                    <span
                        className={styles.icon}
                        onClick={handleEditarClick}>
                        <BsPencilFill /><p>Editar</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Video;


