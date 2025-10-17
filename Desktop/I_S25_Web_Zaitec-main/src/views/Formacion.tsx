import { motion, easeInOut } from "framer-motion";

export default function Formación() {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: easeInOut }
    },
  };

  return (
    <div className="bg-neutral-100 min-h-screen flex items-center justify-center">
      <section className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 pb-25 md:pt-25">
        
        <h2 className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4">
          <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología.
        </h2>

        <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">
          Aquí destacamos los beneficios esenciales de nuestros servicios.
        </p>

        {/* CONTENEDOR DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-4/5 mx-auto mt-10">

          {/* TARJETA 1 - AWS Services */}
          <a
            href="https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="cursor-pointer flex flex-col justify-center border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#FF9900] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">AWS Services</h3>
              <p className="text-white">
                Empoderamiento de las instituciones de educación superior con certificaciones y carreras en la nube.
              </p>
            </motion.div>
          </a>

          {/* TARJETA 2 - Udemy */}
          <a
            href="https://www.udemy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="cursor-pointer flex flex-col justify-center border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#EC5252] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">Udemy</h3>
              <p className="text-white">
                Domina hoy las habilidades del mañana con cursos actualizados e impartidos por expertos.
              </p>
            </motion.div>
          </a>

          {/* TARJETA 3 - Python */}
          <a
            href="https://www.edx.org/learn/python"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="cursor-pointer flex flex-col justify-center items-start border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#306998] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">Python</h3>
              <p className="text-white">
                Explora Python, un lenguaje de programación popular en diversas carreras tecnológicas.
              </p>
            </motion.div>
          </a>

          {/* TARJETA 4 - SAP */}
          <a
            href="https://logaligroup.com/cursos-gratis-aprender-sap-desde-cero/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="cursor-pointer flex flex-col justify-center items-start border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#1E7145] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">SAP</h3>
              <p className="text-white">
                Potencia tu carrera con cursos gratuitos de SAP y adquiere habilidades en gestión empresarial y tecnología.
              </p>
            </motion.div>
          </a>

        </div>
      </section>
    </div>
  );
}


