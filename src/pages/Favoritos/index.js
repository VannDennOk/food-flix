import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
    const { favorito } = useFavoritosContext();
    return (
        <>
            <Banner img="favoritos"></Banner>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />;
                })}
            </section>
        </>
    );
};

export default Favoritos;