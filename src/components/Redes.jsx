import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faBehance, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Redes() {
    const redes = [
        { nombre: 'GitHub', link: 'https://github.com/adrieldussex', icono: faGithub },
        { nombre: 'LinkedIn', link: 'https://linkedin.com/in/adrieldussex', icono: faLinkedin },
        { nombre: 'Instagram', link: 'https://instagram.com/adrieldussex', icono: faInstagram },
        { nombre: 'Behance', link: 'https://behance.com/adrieldussex', icono: faBehance },
      ];

      return (
        <ul className="lg:flex hidden lg:visible">
            {redes.map((a) => (
            <li key={a.nombre}>
                <NavLink to={a.link} target='_blank' className='hover:bg-gray-100/50 dark:hover:bg-gray-800 rounded-md w-10 h-10 grid place-items-center'>
                <FontAwesomeIcon icon={a.icono} className='text-xl dark:text-gray-200' />
                </NavLink>
            </li>
            ))}
        </ul>
    )
}