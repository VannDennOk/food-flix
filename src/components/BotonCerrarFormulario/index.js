import styles from "./BotonCerrarFormulario.module.css"
import { useFormulario } from "context/FormularioContext";

const BotonCerrarFormulario = ({children, type = "button" }) => {
    const { cambiarMostrar } = useFormulario();

    return (
        <button className={styles.boton} onClick={cambiarMostrar} type={type}>
            {children}
        </button>
    );
};

export default BotonCerrarFormulario;