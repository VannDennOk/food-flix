import styles from "./BotonCerrarFormulario.module.css"
import { useFormulario } from "context/FormularioContext";
import clsx from "clsx";

const BotonCerrarFormulario = ({children, type = "button", extraClass }) => {
    const { cambiarMostrar } = useFormulario();

    return (
        <button className={clsx(styles.boton, extraClass)} onClick={cambiarMostrar} type={type}>
            {children}
        </button>
    );
};

export default BotonCerrarFormulario;