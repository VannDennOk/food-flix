import { useState } from "react";
import styles from "./index.module.css"
import Hero from "components/Hero";
import Formulario from "components/Formulario";
import { useFormulario } from "context/FormularioContext";
import Categoria from "components/Categoría";

function Inicio() {
    const { mostrarFormulario } = useFormulario();
    const [videos, setVideos] = useState([{
        id: 1,
        titulo: "Rigatoni alla Norma",
        categoria: "Pastas",
        imagen: "https://i.postimg.cc/66vQtzp7/pasta-01-norma.png",
        link: "https://www.youtube.com/embed/axfR-rPCo6U?si=tqCTOO2cyX0ywCYo",
        descripcion: "Receta de pasta a la Norma"
    },
    {
        id: 2,
        titulo: "Fettuccine peperonata",
        categoria: "Pastas",
        imagen: "https://i.postimg.cc/C1ZxZsCQ/pasta-02-peperonata.png",
        link: "https://www.youtube.com/embed/VhQU8yNFa-4?si=S-cKZHsVh27kokjS",
        descripcion: "Receta de pasta a la peperonata"
    },
    {
        id: 3,
        titulo: "Rigatoni ai funghi",
        categoria: "Pastas",
        imagen: "https://i.postimg.cc/YSDSqsFF/pasta-03-funghi.png",
        link: "https://www.youtube.com/embed/-CDBqBjfH2g?si=qepTFftbkTM4soiC",
        descripcion: "Receta de pasta con hongos"
    },
    {
        id: 4,
        titulo: "Pizza funghi",
        categoria: "Pizzas",
        imagen: "https://i.postimg.cc/sXtD5GwD/pizza-01-funghi.png",
        link: "https://www.youtube.com/embed/NpwhBFrOUmI?si=f2OhF-NDgh0XuNv6",
        descripcion: "Receta de pizza de hongos"
    },
    {
        id: 5,
        titulo: "Pizza napolitana",
        categoria: "Pizzas",
        imagen: "https://i.postimg.cc/3w1Kfb16/pizza-02-napolitana.png",
        link: "https://www.youtube.com/embed/atKtlyhcRlM?si=Ja0ItWfvoQXeG5T6",
        descripcion: "Receta de pizza de napolitana"
    },
    {
        id: 6,
        titulo: "Pizza carbonara",
        categoria: "Pizzas",
        imagen: "https://i.postimg.cc/VN86Vt8S/pizza-03-carbonara.png",
        link: "https://www.youtube.com/embed/vz-AYJRYZo0?si=lyaqW72FiR5CY8Te",
        descripcion: "Receta de pizza a la carbonara"
    },
    {
        id: 7,
        titulo: "Ensalada de rabanitos",
        categoria: "Ensaladas",
        imagen: "https://i.postimg.cc/FHczpZ25/ensalada-01-rabanitos.png",
        link: "https://www.youtube.com/embed/HVA31cX7EtQ?si=bG6P4kuCf-U3xnJG",
        descripcion: "Receta de ensalada a base de rabanitos"
    },
    {
        id: 8,
        titulo: "Ensalada de palta",
        categoria: "Ensaladas",
        imagen: "https://i.postimg.cc/g0HJF0zg/ensalada-02-palta.png",
        link: "https://www.youtube.com/embed/-BNHwczpLCE?si=GW7DADH58vus5Q3S",
        descripcion: "Receta de ensalada a base de palta"
    },
    {
        id: 9,
        titulo: "Ensalada de pepinos",
        categoria: "Ensaladas",
        imagen: "https://i.postimg.cc/yYDkgBjN/ensalada-03-pepinos.png",
        link: "https://www.youtube.com/embed/HVA31cX7EtQ?si=6S-oYBKzLpF3LMsa",
        descripcion: "Receta de ensalada a base de pepinos"
    },

    {
        id: 10,
        titulo: "Spaghetti verdi",
        categoria: "Pastas",
        imagen: "https://i.postimg.cc/L5WG5RfJ/pasta-04-verde.png",
        link: "https://www.youtube.com/embed/9cYZ_E6Kpv4?si=RedSu1D771tF9eUH",
        descripcion: "Receta de espaguetis verdes"
    },

    {
        id: 11,
        titulo: "Pizza Pepperoni",
        categoria: "Pizzas",
        imagen: "https://i.postimg.cc/QCCRjVBL/pizza-04-pepperoni.png",
        link: "https://www.youtube.com/embed/Bptr5-wKKHY?si=zb8KcbEa7k4KKICI",
        descripcion: "Receta de pizza de pepperoni especial con huevo"
    },

    {
        id: 12,
        titulo: "Ensalada de mariscos",
        categoria: "Ensaladas",
        imagen: "https://i.postimg.cc/Px2gG15z/ensalada-04-mariscos.png",
        link: "https://www.youtube.com/embed/mERYTifdTDQ?si=aSx4q3gtR-PG_BU0",
        descripcion: "Receta de ensalada a base de mariscos"
    }])









    //Registrar video
    const registrarVideo = (video) => {
        setVideos([...videos, video])
    }

    //Eliminar video
    const eliminarVideo = (id) => {
        console.log("eliminar video")
        const nuevosVideos = videos.filter((video) => video.id !== id)
        setVideos(nuevosVideos)
    }

    //Lista de categorías
    const categorias = [
        {
            tag: "Pastas",
            color: "#BF0404",
            sombra: "0px 0px 4px 1px rgba(191, 4, 4, 0.7)"
        },

        {
            tag: "Pizzas",
            color: "#F29F05",
            sombra: "0px 0px 4px 1px rgba(242, 159, 5, 0.7)"
        },

        {
            tag: "Ensaladas",
            color: "#83A603",
            sombra: "0px 0px 4px 1px rgba(131, 166, 3, 0.7)"
        }
    ]

    /*     useEffect(() => {
            fetch("https://my-json-server.typicode.com/VannDennOk/food-flix-api/videos")
                .then((response) => response.json())
                .then((data) => {
                    setVideos(data);
                });
        }, []);
     */

    return (
        <div className={styles.container}>
            <Hero img="home"></Hero>

            <section className={styles.containerContenido}>

                {
                    mostrarFormulario && <Formulario
                        categorias={categorias.map((categoria) => categoria.tag)}
                        registrarVideo={registrarVideo}
                    />
                }


                <div className={styles.containerCategorias}>
                    {
                        categorias.map((categoria) => <Categoria
                            datos={categoria}
                            key={categoria.tag}
                            videos={videos.filter(video => video.categoria === categoria.tag)}
                            eliminarVideo={eliminarVideo}
                        />
                        )
                    }
                    {/* {videos.map((video) => <Video {...video} key={video.id} />)} */}
                </div>
            </section>
        </div>
    );
};

export default Inicio;