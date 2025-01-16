import { createContext, useContext, useState } from "react";

const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const cambiarMostrar = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    return (
        <FormularioContext.Provider value={{ mostrarFormulario, cambiarMostrar }}>
            {children}
        </FormularioContext.Provider>
    );
};

export const useFormulario = () => {
    return useContext(FormularioContext);
};
