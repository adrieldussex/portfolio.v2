// import Proyectos from "./Proyectos";

export default function Home() {
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
                    <div className="flex flex-col gap-2 mb-24">
                        <p className="lg:hidden font-semibold text-xl">About</p>
                        <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and Ive had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
                        <p>My main focus these days is building products and leading projects for our clients at Upstatement. In my free time Ive also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
                    </div>
                    {/* <div className="flex flex-col gap-4 ">
                        <header className="text-slate-200">
                            <p className="w-2/3 text-left text-2xl font-semibold">Algunos proyectos en los que he trabajado recientemente</p>
                            <p className="text-md font-normal">Ver todos</p>
                        </header>
                        <Proyectos />
                    </div> */}
                </main>
            </div>
        </div>
    )
}