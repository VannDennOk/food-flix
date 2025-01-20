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
                <FavoritoProvider>
                    <Cabecera />
                    <Container>
                        <Outlet />
                    </Container>
                    <Pie />
                </FavoritoProvider>
            </FormularioProvider>
        </main>
    );
}

export default PaginaBase;