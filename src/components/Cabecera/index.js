import { Link, useLocation } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo.svg";
import CabeceraLinks from "components/CabeceraLinks";
import BotonMostrarFormulario from "components/BotonMostrarFormulario";
import { useFormulario } from "context/FormularioContext";
import { BsFillHouseFill, BsPlusCircleFill, BsFillStarFill } from "react-icons/bs";

const Cabecera = () => {
    const { cambiarMostrar } = useFormulario();
    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path ? styles.activeLink : "";
    const isActiveButton = (path) => location.pathname === path ? styles.activeButton : "";
    return (
        <header className={styles.cabecera}>
            <section className={styles.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Logo FOOD Flix" />
                </Link>
            </section>
            <nav>
                <CabeceraLinks
                    url="./"
                    extraClass={isActiveLink("/")}>
                    <span className={styles.span}>
                        <BsFillHouseFill className={styles.iconHome} />
                        <p className={styles.txt}>Home</p>
                    </span>
                </CabeceraLinks>
                <BotonMostrarFormulario
                    cambiarMostrar={cambiarMostrar}
                    extraClass={isActiveButton("/")}>
                    <span className={styles.span}>
                        <BsPlusCircleFill className={styles.icon} />
                        <p className={styles.txt}>Nuevo Video</p>
                    </span>
                </BotonMostrarFormulario>
                <CabeceraLinks
                    url="./Favoritos"
                    extraClass={isActiveLink("/Favoritos")}>
                    <span className={styles.span}>
                        <BsFillStarFill className={styles.iconStar} />
                        <p className={styles.txt}>Favoritos</p>
                    </span>
                </CabeceraLinks>
            </nav>
        </header>
    );
};

export default Cabecera;

