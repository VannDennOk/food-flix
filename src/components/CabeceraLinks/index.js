import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./CabeceraLinks.module.css";

const CabeceraLinks = ({ url, children, extraClass }) => (
    <Link to={url} className={clsx(styles.link, extraClass)}>
        {children}
    </Link>
);

export default CabeceraLinks;