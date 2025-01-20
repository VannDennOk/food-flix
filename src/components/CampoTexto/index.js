import styles from "./CampoTexto.module.css";

const CampoTexto = ({ label, placeholder, valor, setValor, required = false }) => {

    return (
        <div className={styles.campoTexto}>
            <label>
                {label}
                {required && <span> *</span>}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
        </div>
    );
};

export default CampoTexto;