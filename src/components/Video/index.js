import { useFavoritosContext } from "context/Favoritos";
import styles from "./Video.module.css";
import iconoFavoritoSelected from "./favorito-selected.svg";
import iconoFavorito from "./favorito.svg";
import { BsTrashFill, BsPencilFill } from "react-icons/bs"; //<BsTrashFill /> <BsPencilFill />
import { Link } from "react-router-dom";

const Video = (props) => {

    const { titulo, categoria, imagen, link, descripcion, id } = props.datos
    const { tag, color, sombra, eliminarVideo } = props


    const colorBorde = {
        borderColor: color,
        boxShadow: sombra
    }

    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(fav => fav.id === id);
    const icon = isFavorito ? iconoFavoritoSelected : iconoFavorito;

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
                    onClick={() => agregarFavorito({ id, titulo, imagen })}
                />
            </span>
            <div className={styles.cardFooter}>
                <span className={styles.icon} onClick={() => eliminarVideo(id)}>
                    <BsTrashFill /><p>Eliminar</p>
                </span>
                <span className={styles.icon}>
                    <BsPencilFill /><p>Editar</p>
                </span>
            </div>
        </div>
        </div>
    );
};

export default Video;


