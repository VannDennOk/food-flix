import { Link } from "react-router-dom";
import styles from "./Pie.module.css";
import logo from "./logo.svg";
import linkedin from "./linkedin.svg";
import github from"./github.svg";

function Pie(){
    return(
        <footer className={styles.pieContainer}>
            <section className={styles.pieLogo}>
                <Link to="/"><img src={logo} alt="Logo FOOD Flix"/></Link>
            </section>

            <section className={styles.pieInfo}>
                    <p className={styles.pieTexto}>
                        Desarrollado por Vanina Denegri para el Programa ONE de Alura Latam + Oracle | 2024                
                    </p>
                    <span className={styles.pieSocial}>
                        <a href="#"><img src={linkedin} alt="LinkedIn"/></a>
                        <a href="#"><img src={github} alt="GitHub"/></a>
                    </span>

            </section>
        </footer>
    );
};

export default Pie;