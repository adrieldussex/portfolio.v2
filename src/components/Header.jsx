import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import Redes from './Redes';

export default function Header() {
  return (
    <div className="mb-2 lg:mb-0 lg:sticky lg:top-0 flex flex-col justify-between lg:min-h-screen lg:max-h-screen lg:w-2/5 pt-12 lg:py-24">
      <main className='flex flex-col gap-4'>
        <header className='flex flex-col gap-1'>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">Adriel Dussex</h1>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Diseñador gráfico y Desarrollador web</h2>
          <p className="text-lg lg:w-3/4 mb-2">Me gusta trabajar en proyectos escalables enfocados en la experiencia de usuario</p>
          <ul className='flex gap-4'>
            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faBriefcase}/>Disponible</li>
            <li className='flex gap-2 items-center'><FontAwesomeIcon icon={faCakeCandles}/>17 de Abril</li>
          </ul>
        </header>
        <section className='mb-6'>
          <h3 className="text-lg font-semibold">Perfil</h3>
          <p className="text-base lg:w-4/5">¡Hola! Mi nombre es Adriel. Soy un joven en constante práctica por desarrollar mis habilidades tecnológicas, sobre todo en diseño y desarrollo web.</p>
          <p className="text-base lg:w-4/5">En 2017 comencé a trabajar de manera independiente con distintos proyectos en el mundo del diseño gráfico y cinco años después decidí interiorizarme en el mundo IT.</p>
        </section>
        <footer className='flex flex-col gap-4'>          
          <Button />
          <Redes />
        </footer>
      </main>
      <footer className='hidden lg:flex text-xs text-gray-600 font-semibold mt-4'>Copyright © 2023 Ciclo. Hecho con ❤️ desde Argentina.</footer>
    </div>
  )
}
