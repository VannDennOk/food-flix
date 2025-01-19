import styles from "./BotonLimpiar.module.css";

const BotonLimpiar = ({ children, onClick, type = "button" }) => {
    return (
        <button className={styles.boton} onClick={onClick} type={type}>{children}</button>
    )
};

export default BotonLimpiar;