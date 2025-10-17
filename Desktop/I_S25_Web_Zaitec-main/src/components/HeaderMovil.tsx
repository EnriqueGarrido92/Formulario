
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useState } from 'react';


export default function HeaderMovil() {


    const [modalNav, setModalNav] = useState<boolean>(false)

   
    const openNav = () => {
        setModalNav(prev => !prev)
    }

    return (
        <div className="relative bg-[url('/img/header-zaitectwo.jpg')] bg-no-repeat bg-cover bg-top h-105">
            <div className='absolute inset-0 bg-black/70 flex items-end pb-13'>
                <motion.p
                    className='mx-auto text-2xl text-amber-50 text-center px-2 pb-7 will-change-transform'
                    initial={{ x: -400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}>
                    Asesoría tecnológica diseñada para empresas líderes
                </motion.p>
            </div>

            <div className='relative grid grid-col-1 justify-items-center gap-1 pt-5 z-10'>
                <div>
                    <img
                        src="/img/zaitec-logo-blanco.png"
                        alt="imagen del logo"
                        className='w-25 min-w-18 mx-auto pb-2 z-10' />
                </div>
                <div className=''>
                    <h1 className="text-7xl text-white font-bold font-sans z-10 "> Zaitec</h1>
                    <p className="text-4xl text-amber-500 text-right font-bold z-10 ">Innova</p>
                </div>
            </div>

            <div className='absolute top-5 right-5 z-50 flex flex-col items-end gap-1'>
                <button
                    type='button'
                    className='flex flex-col items-center text-white pr-2 '
                    onClick={openNav}
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-orange-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg><span className='text-sm'>Menu</span></button>

                {modalNav && (
                    <nav className=' flex flex-col items-end bg-gray-900 opacity-80 rounded-xl'>
                        <motion.div className=' px-4 py-1 w-fit text-shadow-lg'
                            whileHover={{ x: -10 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (isActive ? 'text-orange-500  font-bold ' : 'text-white font-semi-bold')}> Inicio </NavLink>
                        </motion.div>

                        <motion.div className=' px-5 py-1 w-fit'
                            whileHover={{ x: -10 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <NavLink
                                to={'/contacto'}
                                className={({ isActive }) => (isActive ? 'text-orange-500  font-bold' : 'text-amber-50 font-semi-bold')}> Contacto </NavLink>
                        </motion.div>

                        <motion.div className='px-6 py-1  w-fit'
                            whileHover={{ x: -10 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <NavLink
                                to={'/formacion'}
                                className={({ isActive }) => (isActive ? 'text-orange-500  font-bold' : 'text-amber-50 font-semi-bold')}> Formación </NavLink>
                        </motion.div>

                        <motion.div className='px-5 py-1 w-fit'
                            whileHover={{ x: -10 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <NavLink
                                to={'/desarrollo'}
                                className={({ isActive }) => (isActive ? 'text-orange-500  font-bold' : 'text-amber-50 font-semi-bold')}> Desarrollo de proyectos </NavLink>
                        </motion.div>
                    </nav>)}
            </div>
        </div>
    )
}
