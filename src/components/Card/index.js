import { useFavoritosContext } from "context/Favoritos";
import styles from "./Card.module.css";
import iconoFavoritoSelected from "./favorito-selected.svg";
import iconoFavorito from "./favorito.svg";
import iconoEliminar from "./eliminar.svg";
import iconoEditar from "./editar.svg";
import { Link } from "react-router-dom";

function Card({ id, imagen, titulo }) {

    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(fav => fav.id === id);
    const icon = isFavorito ? iconoFavoritoSelected : iconoFavorito;

    return (
        <div className={styles.container}>
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
                <span>
                    <img src={iconoEliminar} alt="Icono Eliminar" />
                    <p>Eliminar</p>
                </span>
                <span>
                    <img src={iconoEditar} alt="Icono Editar" />
                    <p>Editar</p>
                </span>
            </div>
        </div>
    );
};

export default Card;


