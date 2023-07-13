import { NavLink } from 'react-router-dom'

export default function Nav() {
    const navMain = [
        { titulo: 'Sobre mi', link: '/' },
        { titulo: 'Portfolio', link: '/portfolio' },
        { titulo: 'Contacto', link: '/contacto' },
    ];

  return (
    <ul className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] gap-2 lg:gap-0 items-center">
        {navMain.map((e) => (
            <li className="hover:bg-gray-100/50 dark:hover:bg-gray-800/20 rounded-md hover:shadow-sm border-[1px] border-transparent hover:border-gray-100/80 dark:hover:border-gray-800/30 grid place-items-center" key={e.titulo}>
                <NavLink
                to={e.link}
                className={({isActive}) => {
                    return (
                        'font-semibold border-transparent border-y-4 w-full h-full py-4 text-center ' +
                        (!isActive
                        ? 'dark:text-gray-400 text-gray-500'
                        : 'border-b-sky-500 text-gray-600 dark:text-gray-200')
                    )
                }}>
                    {e.titulo}
                </NavLink>
            </li>
        ))}
    </ul>
  )
}
