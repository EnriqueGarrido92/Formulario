import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'

// Header que se mostrará con una resolución mayor a 782px
export default function HeaderDesktop() {
  return (
    <div className="relative flex flex-row justify-center items-start max-w-8xl  bg-[url('/img/header-zaitectwo.jpg')] bg-no-repeat bg-cover bg-top h-140">
          <div className='absolute inset-0 bg-black/60 flex items-center z-1'>
      
            <motion.p
              className='mx-auto text-6xl text-amber-50 text-center will-change-transform'
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}>
              Asesoría tecnológica diseñada para empresas líderes
            </motion.p>
          </div>

          <div className='relative z-10 flex flex-row gap-8 items-top flex-1 pt-3  '>
            <div className='pt-1'>
              <img
                src="/img/zaitec-logo-blanco.png"
                alt="imagen del logo"
                className='min-w-28 mx-auto pl-4 z-10' />
            </div>
        
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: 'easeInOut', }}
            >
              <h1 className="text-8xl text-white font-bold font-sans"> Zaitec</h1>
              <p className="text-4xl text-amber-500 text-right font-bold">Innova</p>
            </motion.div>
          </div>
          
          <motion.nav
            className='flex flex-col justify-end items-end gap-4 pb-4 pr-10 z-10 h-full'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.8, ease: 'easeInOut', }}
          >
          
            <motion.div
              whileHover={{ x: -10 }}
              whileTap={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=' bg-amber-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-5 py-1 w-fit text-shadow-gray-500 text-shadow-lg'
            >
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'text-black text-shadow-none text-lg font-bold ' : 'text-white font-bold text-lg')}> Inicio </NavLink>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              whileTap={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=' bg-amber-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-5 py-1 w-fit text-shadow-gray-500 text-shadow-lg'

            >
              <NavLink
                to={'/contacto'}
                className={({ isActive }) => (isActive ? 'text-black text-shadow-none text-lg font-bold ' : 'text-white font-bold text-lg')}> Contacto </NavLink>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              whileTap={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=' bg-amber-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-6 py-1  w-fit text-shadow-gray-500 text-shadow-lg'

            >
              <NavLink
                to={'/formacion'}
                className={({ isActive }) => (isActive ? 'text-black text-shadow-none text-lg font-bold ' : 'text-white font-bold text-lg')}> Formación </NavLink>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              whileTap={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=' bg-amber-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-5 py-1 w-fit text-shadow-gray-500 text-shadow-lg'

            >
              <NavLink
                to={'/desarrollo'}
                className={({ isActive }) => (isActive ? 'text-black text-shadow-none text-lg font-bold ' : 'text-white font-bold text-lg')}> Desarrollo de proyectos Software</NavLink>
            </motion.div>
          </motion.nav>
        </div>
  )
}
