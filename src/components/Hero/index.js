import styles from "./Hero.module.css";

function Hero({ img }) {
    return (
        <div className={styles.imagen}
            style={{ backgroundImage: `url("img/hero-${img}.png")` }}>
            <section className={styles.texto}>
                <h1>
                    APRENDÉ LOS PLATOS MÁS RICOS
                    CON LAS MEJORES <strong>VIDEO-RECETAS</strong>
                </h1>
                <h2>
                    Podrás seguir el paso-a-paso y obtener tips exclusivos de cocina de los más experimentados y reconocidos chefs de nuestros canales.
                </h2>
                <h2>
                    Nos especializamos en cocina <strong>italiana</strong> y <strong>mediterránea</strong>.
                </h2>
            </section>
        </div>
    );
};

export default Hero;