import Titulo from "components/Titulo";
import styles from "./Banner.module.css";

const Banner = ({ img, txt }) => (
    <div
        className={styles.imagen}
        style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
    >
        <Titulo>{txt}</Titulo>
    </div>
);

export default Banner;