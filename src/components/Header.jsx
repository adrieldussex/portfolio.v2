import { Link as LinkRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faBehance, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const redes = [
    {
      nombre: 'Instagram',
      link: 'https://instagram.com/adrieldussex',
      icono: faInstagram,
    },
    {
      nombre: 'Behance',
      link: 'https://behance.com/adrieldussex',
      icono: faBehance,
    },
    {
      nombre: 'LinkedIn',
      link: 'https://linkedin.com/in/adrieldussex',
      icono: faLinkedin,
    },
    {
      nombre: 'GitHub',
      link: 'https://github.com/adrieldussex',
      icono: faGithub,
    },
  ]

  return (
    <header className="lg:sticky lg:top-0 flex flex-col justify-between lg:min-h-screen lg:max-h-screen lg:w-2/5 pt-12 lg:py-24">
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-5xl font-bold text-gray-200 tracking-tight">Adriel Dussex</p>
                <p className="text-xl font-semibold text-gray-200">Diseñador gráfico y Desarrollador web</p>
                <p className="text-lg mb-4 lg:w-3/4">Me gusta trabajar en proyectos escalables enfocados en la experiencia de usuario</p>
                <p className="text-lg font-semibold">Sobre mi</p>
                <p className="text-base lg:w-4/5">¡Hola! Mi nombre es Adriel. Soy un joven en constante práctica por desarrollar mis habilidades tecnológicas, sobre todo en el mundo del diseño y el desarrollo web.</p>
                <p className="text-base lg:w-4/5">En 2017 comencé a trabajar de manera independiente con distintos proyectos en el mundo del diseño gráfico y tres años después decidí interiorizarme en el mundo IT.</p>
                <p className="text-base lg:w-4/5">Estas son algunas tecnologías con las que he trabajado recientemente:</p>
            </div>
            <button className="rounded-t-md bg-gray-800/20 w-2/5 border-b-4 border-b-transparent hover:border-b-sky-500 h-full py-4 text-center text-gray-200 font-semibold tracking-wider border-t-[1px] border-gray-800/30">Descargar CV</button>
        </div>
        <ul className="lg:flex hidden lg:visible">
          {redes.map(a => (
            <li key={a.nombre}>
              <LinkRouter to={a.link} className='hover:bg-gray-800 rounded-md w-10 h-10 grid place-items-center'>
                <FontAwesomeIcon icon={a.icono} className='text-xl text-gray-200' />
              </LinkRouter>
            </li>
          ))}
        </ul>
    </header>
  )
}
