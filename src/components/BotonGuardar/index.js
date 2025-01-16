import styles from "./BotonGuardar.module.css";

const BotonGuardar = (props) => {
    return <button className={styles.boton}>{props.children}</button>
};

export default BotonGuardar;