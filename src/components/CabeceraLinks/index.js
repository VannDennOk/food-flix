import { Link } from "react-router-dom";
import styles from "./CabeceraLinks.module.css";

function CabeceraLinks({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    );
};

export default CabeceraLinks;