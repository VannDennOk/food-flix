import styles from "./BotonMostrar.module.css";
import clsx from "clsx";

const BotonMostrarFormulario = ({ cambiarMostrar, children, extraClass }) => (
    <button className={clsx(styles.boton, extraClass)} onClick={cambiarMostrar}>
        {children}
    </button>
);

export default BotonMostrarFormulario;