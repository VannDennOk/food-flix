import styles from "./Titulo.module.css";

const Titulo = ({ children }) => (
    <div className={styles.texto}>
        {children}
    </div>
)

export default Titulo