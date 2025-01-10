
import Card from "components/Card";
import Hero from "components/Hero";
import styles from "./index.module.css"
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/VannDennOk/food-flix-api/videos")
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            });
    }, []);

    return (
        <>
            <Hero img="home"></Hero>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    );
};

export default Inicio;