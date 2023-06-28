import { Link as LinkRouter } from 'react-router-dom'

export default function Nav() {
    const navMain = [
        {
            titulo: 'Sobre mi',
            link: '/'
        },
        {
            titulo: 'Portfolio',
            link: '/portfolio'
        },
        {
            titulo: 'Contacto',
            link: '/contacto'
        },
    ]

  return (
    <ul className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] gap-2 lg:gap-0 items-center">
        {navMain.map(e => (
            <li className="hover:bg-gray-800/20 rounded-md hover:shadow-sm border-[1px] border-transparent hover:border-gray-800/30 grid place-items-center font-semibold text-gray-200 " key={e.titulo}>
                <LinkRouter className='border-transparent border-y-4 hover:border-b-sky-500 w-full h-full py-4 text-center' to={e.link}>{e.titulo}</LinkRouter>
            </li>
        ))}
    </ul>
  )
}
