import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "data/db.json";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState([]);
    const parametros = useParams();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/VannDennOk/food-flix-api/videos?id=${parametros.id}`)
            .then((response) => response.json())
            .then((data) => {
                setVideo(...data)
            })
    }, [])

    // const video = videos.find((video)=> video.id === Number(parametros.id));
    if (!video) return <NotFound />
    return (
        <>
            <Banner img="player"></Banner>

            <section className={styles.container}>
                <h2>{video.titulo}</h2>
                <iframe
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </section>
        </>
    );
};

export default Player;