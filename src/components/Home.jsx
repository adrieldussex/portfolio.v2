export default function Home() {
    const navMain = [
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
                <header className="lg:sticky lg:top-0 flex flex-col justify-between lg:max-h-screen lg:w-2/5 pt-12 lg:py-24">
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
                        {/* <nav className="flex flex-col font-semibold uppercase text-sm tracking-wider">
                            <ul className="lg:flex lg:flex-col lg:gap-2 lg:visible hidden">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                        </nav> */}
                    </div>
                    <ul className="lg:flex lg:gap-2 hidden lg:visible">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </header>
                <main className="lg:w-3/5 lg:py-24 h-full flex flex-col gap-4">
                    <ul className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] gap-2 lg:gap-0 items-center">
                        {navMain.map(e => (
                            <li className="hover:bg-gray-800/20 rounded-md hover:shadow-sm border-[1px] border-transparent hover:border-gray-800/30 grid place-items-center font-semibold text-gray-200 " key={e.titulo}>
                                <a className='border-transparent border-y-4 hover:border-b-sky-500 w-full h-full py-4 text-center' href="#">{e.titulo}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full h-full flex gap-4 bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
                        <div className="w-1/2">
                            <p>Jason Lengstorf is the host of Learn With Jason and the undefeated smashburger champ. He helps tech companies connect with developer communities through better devrel strategy and media. Jason advocates for continued learning through collaboration and play. He’s trying his very best to follow his own advice. He lives in Portland, Oregon.</p>
                        </div>
                        <img src="https://res.cloudinary.com/jlengstorf/image/upload/w_400,h_400,c_fill,g_faces,q_auto,f_auto/press/jason-lengstorf-pws-bridge.jpg" alt="" className="w-1/2 overflow-hidden border-b-4 border-yellow-500"/>
                    </div>
                    <div className="w-full min-h-[24vh] h-full bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
                        <p>Formación</p>
                    </div>
                    <div className="w-full min-h-[24vh] h-full bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
                        <p>Hobbies</p>
                    </div>
                </main>
            </div>
        </div>
    )
}