import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo.svg"
import CabeceraLinks from "components/CabeceraLinks"
import BotonMostrarFormulario from "components/BotonMostrarFormulario"
import { useFormulario } from "context/FormularioContext";

const Cabecera = () => {

    const { cambiarMostrar } = useFormulario();

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
                <BotonMostrarFormulario cambiarMostrar={cambiarMostrar}>
                    Nuevo Video
                </BotonMostrarFormulario>
                <CabeceraLinks url="./Favoritos">
                    Favoritos
                </CabeceraLinks>
            </nav>
        </header>
    );
};

export default Cabecera;

