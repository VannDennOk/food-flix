import Cabecera from "components/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import FavoritoProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";
import { FormularioProvider } from "context/FormularioContext";




function PaginaBase() {
    return (
        <main>
            <FormularioProvider>
                <Cabecera />
                <FavoritoProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritoProvider>

                <Pie />
            </FormularioProvider>
        </main>
    );
};

export default PaginaBase;