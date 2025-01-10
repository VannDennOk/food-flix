import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo.svg"
import CabeceraLinks from "components/CabeceraLinks"

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <section className={styles.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Logo FOOD Flix" />
                </Link>
            </section>
            <nav>
                <CabeceraLinks url="./">
                    Home
                </CabeceraLinks>
                <CabeceraLinks url="./NuevoVideo">
                    Nuevo Video
                </CabeceraLinks>
                <CabeceraLinks url="./Favoritos">
                    Favoritos
                </CabeceraLinks>
            </nav>
        </header>
    );
};

export default Cabecera;

