
import { useActionData, Form, useOutletContext } from 'react-router-dom';
import type { ActionFunctionArgs } from "react-router-dom"
import type { ErrorType, UserDataType } from "../types"
import { useRef, useEffect, useState } from 'react';
import { initialForm } from '../layouts/Layout';


export type ActionDataType = {
  error?: string
  formUserData: UserDataType
}

type OutletContextType = {
  formState: UserDataType;
  setFormState: React.Dispatch<React.SetStateAction<UserDataType>>;
};


export const action = async ({ request }: ActionFunctionArgs) => {
  const dataForm = await request.formData()
  const data = Object.fromEntries(dataForm.entries()) as UserDataType
  const userData = { ...data, comentario: 'sin comnetario' }


  // if (Object.values(userData).includes('')) {
  //   return { error: 'Todos los campos son obligatorios' }
  // }

  // if (!emailRegex.test(userData.email)) {
  //   return { error: 'Email no válido' };
  // }

  console.log(userData)
  return { formUserData: userData }
}

export default function Contacto() {
  const actionData = useActionData<ActionDataType>()
  const { formState, setFormState } = useOutletContext<OutletContextType>()
  const [errors, setErrors] = useState<ErrorType>({
    nombre: '',
    apellido: '',
    segunapellido: '',
    email: '',
    telefono: '',
    fecha: '',
  });

  // const [mensageError, setMensageError] = useState<{ error?: string, show?: boolean }>({})
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (actionData && !actionData.error) {
      setFormState(initialForm)
      formRef.current?.reset();
    }
  }, [actionData])

  useEffect(() => {
    const initialErrors: ErrorType = {
      nombre: formState.nombre ? '' : 'Este campo es obligatorio',
      apellido: formState.apellido ? '' : 'Este campo es obligatorio',
      segunapellido: formState.segunapellido ? '' : 'Este campo es obligatorio',
      email: formState.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)
          ? ''
          : 'Email no válido'
        : 'Este campo es obligatorio',
      telefono: formState.telefono ? '' : 'Este campo es obligatorio',
      fecha: formState.fecha ? '' : 'Este campo es obligatorio',
    };

    setErrors(initialErrors);
  }, []);

  // useEffect(() => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const newFormState = { ...formState }

  //   if (Object.values(newFormState).includes('')) {
  //     setMensageError({ error: 'Todos los campos son requeridos', show: true });
  //   } else if (!emailRegex.test(newFormState.email)) {
  //     setMensageError({ error: 'El email no es válido', show: true });
  //   } else {
  //     setMensageError({ error: '', show: false });
  //   }

  // }, [formState])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    // Actualizamos formState
    setFormState(prev => ({
      ...prev,
      [name as keyof UserDataType]: value,
    }));

    // Validamos dinámicamente el campo
    setErrors(prev => {
      const newErrors = { ...prev };

      if (value.trim() === '') {
        newErrors[name as keyof ErrorType] = 'Este campo es obligatorio';
      } else if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors[name as keyof ErrorType] = !emailRegex.test(value) ? 'Email no válido' : '';
      } else {
        newErrors[name as keyof ErrorType] = '';
      }

      return newErrors;
    });
  }

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 p-10 my-10 mx-auto">
      <p className='text-2xl text-center mb-6'><span className='text-orange-600'>Rellene el formulario</span> y le conestaremos lo antes posible</p>
      <fieldset className="border-2 border-neutral-300 p-10 rounded-xl shadow-lg">
        <legend className="text-xl md:text-3xl lg:text-4xl text-center text-neutral-600 px-2"> Formulario de Contacto</legend>
        <Form
          ref={formRef}
          method="post"
          className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formState.nombre}
              onChange={handleChange}
              placeholder="Escribe tú nombre..."
              className="w-full border border-neutral-300 p-2 rounded-md shadow-md outline-0 text-md" />
            {errors.nombre && <p className='text-red-500 text-sm'>{errors.nombre}</p>}
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="apellido">Primer Apellido:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="apellido" name="apellido"
              onChange={handleChange}
              placeholder="Escribe tú primer apellido..."
            />
            {errors.apellido && <p className='text-red-500 text-sm'>{errors.apellido}</p>}
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="segunapellido">Segundo Apellido:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="segunapellido" name="segunapellido"
              onChange={handleChange}
              placeholder="Escribe tú segundo apellido..."
            />
            {errors.segunapellido && <p className='text-red-500 text-sm'>{errors.segunapellido}</p>}
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="email"
            >Email:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="email" name="email"
              onChange={handleChange}
              placeholder="Escribe tú email..."
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="telefono">Telefono de contacto:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="telefono" name="telefono"
              onChange={handleChange}
              placeholder="Escribe tú número de teléfono..."
            />
            {errors.telefono && <p className='text-red-500 text-sm'>{errors.telefono}</p>}
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="fecha">Fecha:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md text-neutral-500"
              type="date" id="fecha"
              name="fecha"
              onChange={handleChange}
            />
            {errors.fecha && <p className='text-red-500 text-sm'>{errors.fecha}</p>}
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
            >Comentario:</label>
            <textarea
              className="w-full h-20 border border-neutral-300 shadow-md outline-0"
              id="comentario" name="comentario"
              onChange={handleChange}
              placeholder="Escribe un comentario..."></textarea>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="block bg-green-500 flex-1  my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md"
            >Enviar</button>
            <button
              type="reset"
              className="block bg-orange-500 flex-1 my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md"
            >Resetear</button>
          </div>
          <div>

          </div>
        </Form>
      </fieldset>

    </div>
  )
}




