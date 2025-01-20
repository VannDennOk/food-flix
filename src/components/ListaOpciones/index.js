import styles from "./ListaOpciones.module.css";

function ListaOpciones({ label, valor, setCategoria, placeholder, categorias }) {
    const manejarCambio = (e) => {
        setCategoria(e.target.value)
    }

    return (
        <div className={styles.listaOpciones}>
            <label>{label}</label>
            <select className={styles.select} value={valor} onChange={manejarCambio}>
                <option value="" disabled hidden>{placeholder}</option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaOpciones;
