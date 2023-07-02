import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faBehance, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faCakeCandles } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const redes = [
    { nombre: 'GitHub', link: 'https://github.com/adrieldussex', icono: faGithub },
    { nombre: 'LinkedIn', link: 'https://linkedin.com/in/adrieldussex', icono: faLinkedin },
    { nombre: 'Instagram', link: 'https://instagram.com/adrieldussex', icono: faInstagram },
    { nombre: 'Behance', link: 'https://behance.com/adrieldussex', icono: faBehance },
  ];

  return (
    <header className="lg:sticky lg:top-0 flex flex-col justify-between lg:min-h-screen lg:max-h-screen lg:w-2/5 pt-12 lg:py-24">
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-5xl font-bold text-gray-200 tracking-tight">Adriel Dussex</p>
                <p className="text-xl font-semibold text-gray-200">Diseñador gráfico y Desarrollador web</p>
                <p className="text-lg mb-4 lg:w-3/4">Me gusta trabajar en proyectos escalables enfocados en la experiencia de usuario</p>
                <ul className='flex gap-4'>
                  <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faBriefcase}/>Disponible</li>
                  <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faCakeCandles}/>17 de Abril</li>
                </ul>
                <p className="text-lg font-semibold">Perfil</p>
                <p className="text-base lg:w-4/5">¡Hola! Mi nombre es Adriel. Soy un joven en constante práctica por desarrollar mis habilidades tecnológicas, sobre todo en el mundo del diseño y el desarrollo web.</p>
                <p className="text-base lg:w-4/5">En 2017 comencé a trabajar de manera independiente con distintos proyectos en el mundo del diseño gráfico y cinco años después decidí interiorizarme en el mundo IT.</p>
            </div>
            <button className="rounded-t-md bg-gray-800/20 mx-auto lg:mx-0 w-full md:w-3/5 lg:w-2/5 border-b-4 border-b-transparent hover:border-b-sky-500 h-full py-4 text-center text-gray-200 font-semibold tracking-wider border-t-[1px] border-gray-800/30">Descargar CV</button>
        </div>
        <ul className="lg:flex hidden lg:visible">
          {redes.map((a) => (
            <li key={a.nombre}>
              <NavLink to={a.link} target='_blank' className='hover:bg-gray-800 rounded-md w-10 h-10 grid place-items-center'>
                <FontAwesomeIcon icon={a.icono} className='text-xl text-gray-200' />
              </NavLink>
            </li>
          ))}
        </ul>
        <p className='text-xs text-gray-600 font-semibold'>Copyright © 2023 Ciclo. Hecho con ❤️ desde Argentina.</p>
    </header>
  )
}
