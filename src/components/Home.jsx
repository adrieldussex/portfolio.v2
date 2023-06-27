export default function Home() {
    const navMain = [
        {
            titulo: 'Feed',
        },
        {
            titulo: 'Sobre mi',
        },
        {
            titulo: 'Portfolio',
        },
        {
            titulo: 'Contacto',
        },
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-gray-400 font-sans">
            <div className="container mx-auto w-4/5 xl:w-3/5 flex flex-col lg:flex-row lg:gap-6 xl:gap-4">
                <header className="lg:sticky lg:top-0 flex flex-col justify-between lg:min-h-screen lg:w-2/5 pt-12 lg:py-24">
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
                        <nav className="flex flex-col font-semibold uppercase text-sm tracking-wider">
                            <ul className="lg:flex lg:flex-col lg:gap-2 lg:visible hidden">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                        </nav>
                    </div>
                    <ul className="lg:flex lg:gap-2 hidden lg:visible">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </header>
                <main className="lg:w-3/5 lg:py-24 h-full">
                    <ul className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] items-center">
                        {navMain.map(e => (
                            <li className="hover:bg-gray-800 grid place-items-center font-semibold text-gray-200 border-y-4 border-transparent hover:border-b-sky-500" key={e.titulo}>
                                <a className='w-full h-full py-4 text-center' href="#">{e.titulo}</a>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    )
}