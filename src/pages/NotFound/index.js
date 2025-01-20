import styles from "./NotFound.module.css";
import error from "./error.png";

function NotFound() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <img src={error} alt="Error plato vacío" />
                <div className={styles.texto}>
                    <h2>404</h2>
                    <p>Página no encontrada</p>
                </div>
            </div>
        </section>
    );
}

export default NotFound;