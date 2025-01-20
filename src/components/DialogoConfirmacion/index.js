import styles from "./DialogoConfirmacion.module.css";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const DialogoConfirmacion = ({ mensaje, abierto, onCerrar }) => {
    if (!abierto) return null;

    return (
        <div open className={styles.dialogo}>
            <p>{mensaje}</p>
            <BsXCircleFill className={styles.botonIcono} onClick={onCerrar}></BsXCircleFill>
        </div>
    );
}

export default DialogoConfirmacion;