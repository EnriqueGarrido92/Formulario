import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Logo + descripción */}
        <div className="flex flex-col gap-4">
          <img src="/img/logo-zaitec.png" alt="Logo" className="h-12 w-auto object-contain" />
          <p className="text-gray-400 text-sm max-w-xs">
            Soluciones tecnológicas innovadoras que ayudan a tu negocio a crecer.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2 text-white">Enlaces</h3>
          <ul className="flex flex-col gap-1 text-sm">
            {["Inicio", "Servicios", "Formación", "Contacto", "Desarrollo de proyectos"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto + redes + newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold mb-2 text-white">Contacto</h3>
          <p className="text-gray-400 text-sm">📍 Plaza De Castilla 3 10 E 28046 - Madrid</p>
          <p className="text-gray-400 text-sm">✉️ contacto@zaitec.com</p>

          {/* Redes sociales */}
          <div className="flex gap-4 text-2xl mt-2">
            {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, idx) => (
              <a
                href="#"
                key={idx}
                className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-400">
        &copy; 2025 Zaitec innova. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
