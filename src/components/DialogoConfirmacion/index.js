import styles from "./DialogoConfirmacion.module.css";
import { BsCheckCircleFill } from "react-icons/bs";

const DialogoConfirmacion = ({ mensaje, abierto }) => {
    if (!abierto) return null;

    return (
        <div className={styles.dialogo}>
            <BsCheckCircleFill className={styles.check} />
            <p>{mensaje}</p>
        </div>
    );
}

export default DialogoConfirmacion;