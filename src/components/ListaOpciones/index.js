import styles from "./ListaOpciones.module.css";

function ListaOpciones(props) {

    const manejarCambio = (e) => {
        props.setCategoria(e.target.value)
    }

    return (
        <div className={styles.listaOpciones}>
            <label>{props.label}</label>
            <select className={styles.select} value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>{props.placeholder}</option>
                {props.categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
            </select>
        </div>
    );
};

export default ListaOpciones;
