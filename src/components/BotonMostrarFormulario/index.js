import styles from "./BotonMostrar.module.css"

const BotonMostrarFormulario = (props) => {
    return <button className={styles.boton} onClick={props.cambiarMostrar}>{props.children}</button>
};

export default BotonMostrarFormulario;