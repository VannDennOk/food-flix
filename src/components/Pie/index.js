import { Link } from "react-router-dom";
import styles from "./Pie.module.css";
import logo from "./logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Pie() {
    return (
        <footer className={styles.pieContainer}>
            <section className={styles.pieLogo}>
                <Link to="/"><img src={logo} alt="Logo FOOD Flix" /></Link>
            </section>

            <section className={styles.pieInfo}>
                <p className={styles.pieTexto}>
                    Desarrollado por Vanina Denegri para el Programa ONE de Alura Latam + Oracle | 2024
                </p>
                <span className={styles.pieSocial}>
                    <a href="https://www.linkedin.com/in/vaninadenegri/"><FaLinkedin /></a>
                    <a href="https://github.com/VannDennOk"><FaGithub /></a>
                </span>

            </section>
        </footer>
    );
};

export default Pie;