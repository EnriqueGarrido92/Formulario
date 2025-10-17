import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import Contacto from "./views/Contacto";
import Desarrollo from "./views/Desarrollo";
import Formacion from "./views/Formacion";
import {action as actionContacto} from './views/Contacto'

export const routerApp = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <IndexPage />
            },
            {
                path: 'contacto',
                element: <Contacto />,
                action: actionContacto
            },
            {
                path: 'formacion',
                element: <Formacion />
            },
            {
                path: 'desarrollo',
                element: <Desarrollo />
            }
        ]
    }
])


