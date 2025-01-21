import styles from "./Input.module.css";

const Input = ({ label, placeholder, valor, setValor, required, tipo }) => {

    return (
        <div className={styles.campoTexto}>
            <label>
                {label}
                {required && <span> *</span>}
            </label>
            <input
                type={tipo}
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
        </div>
    );
};

export default Input;