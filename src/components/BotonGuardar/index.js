import styles from "./BotonGuardar.module.css";

const BotonGuardar = ({ children, ...props }) => (
    <button className={styles.boton} {...props}>
        {children}
    </button>
);

export default BotonGuardar;