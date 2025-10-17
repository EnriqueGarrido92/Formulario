import { useState, useEffect } from "react"
import HeaderDesktop from './HeaderDesktop';
import HeaderMovil from "./HeaderMovil";


export default function Header() {

    //Estado para manejar la resolución
    const [modeMobile, setModMobile] = useState<boolean>(false)

    // Actualizamos en el primer render
    useEffect(() => {
        // función que maneja el estado
        const handleResize = () => setModMobile(window.innerWidth < 768);
        // llamada a la función para su ejecución inmedieta
        handleResize();
        // creando el evento y añadimos la función 
        window.addEventListener("resize", handleResize);
        // borramos el evento para renders innecesarios
        return () => window.removeEventListener("resize", handleResize)

    }, [])
    return (
        <>
            <header>
                {!modeMobile ? <HeaderDesktop /> : <HeaderMovil />}
            </header>
        </>
    )
}
