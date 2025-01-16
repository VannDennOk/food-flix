import styles from "./CampoTexto.module.css";

function CampoTexto(props) {

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return (
        <div className={styles.campoTexto}>
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    );
};

export default CampoTexto;