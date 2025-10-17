import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer" // 👈 importa el Footer aquí
import type { UserDataType } from "../types"

export const initialForm = {
  nombre: '',
  apellido: '',
  segunapellido: '',
  email: '',
  telefono: '',
  fecha: '',
  comentario: 'sin comentario',
}

export default function Layout() {
  const [formState, setFormState] = useState<UserDataType>(initialForm)

  return (
    <>
      <Header />

      <Outlet context={{ formState, setFormState }} />

      <Footer /> 
    </>
  )
}
