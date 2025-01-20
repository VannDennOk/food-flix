import styles from "./BotonLimpiar.module.css";

const BotonLimpiar = ({ children, onClick, type = "button" }) => (
    <button className={styles.boton} onClick={onClick} type={type}>
        {children}
    </button>
);

export default BotonLimpiar;