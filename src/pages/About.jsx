import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    // const skills = ['JavaScript', 'React', 'NodeJS', 'TailwindCSS', 'WordPress']

    // const skillsList = skills.map(skill => 
    //     <li key={skill}>
    //         <FontAwesomeIcon icon={faCaretRight} className="mr-2"/>
    //         {skill}
    //     </li>
    //     )

    const hobbies = [
        { id: 1, img: '', texto: 'Deportes' },
        { id: 2, img: '', texto: 'Cocinar' },
        { id: 3, img: '', texto: 'Peliculas' },
        { id: 4, img: '', texto: 'Juegos' },
    ]

    const hobbiesList = hobbies.map(hobbie =>
        <li key={hobbie.id} className="flex flex-col gap-2 items-center justify-center">
            <span className='h-24 w-full rounded-md bg-blue-300'/>
            <p className="text-left">{hobbie.texto}</p>
        </li>
        )

    return (
        <>        
            {/* <div className="w-full h-full flex flex-col-reverse lg:flex-row gap-4 bg-gray-100/50 dark:bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  dark:border-gray-800/30 p-4">
                <div className="lg:w-1/2 flex flex-col gap-2">
                    <p>Desde muy chico me gustó encaminarme siempre en distintos proyectos. Con un corazón emprendedor, me fui formando y adquiriendo experiencia en diseño gráfico y creación de marcas.</p>
                    <p>Actualmente, mi enfoque principal está en crear y trabajar en proyectos que me permitan nutrir y desarrollar mis habilidades.</p>
                    <p>Estas son algunas tecnologías con las que he trabajado recientemente:</p>
                    <ul className="grid grid-cols-2 w-full md:w-1/2 lg:w-full">
                        {skillsList}
                    </ul>
                </div>
                <img src="https://avatars.githubusercontent.com/u/110680123?v=4" alt="Adriel Dussex" className="md:mx-auto md:w-1/2 overflow-hidden border-b-4 object-contain h-full border-yellow-500"/>
            </div> */}
            <div>
                <header className="w-full py-12 px-4 flex mb-4">
                    <img 
                        src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/6101e711cc447aa6793892e8_Olive%20Photo-p-800.png"
                        alt=""
                        className="h-full w-1/3 rounded-lg shadow-md scale-95"/>
                    <img 
                        src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/6101e736b16b443e737f1dd3_Waterfall%20Photo-p-500.png"
                        alt=""
                        className="h-full w-1/3 scale-125 rounded-lg shadow-md z-10"/>
                    <img 
                        src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/6101e9006cce26256230aa9f_Bridge%20Photo%202-p-800.png"
                        alt=""
                        className="h-full w-1/3 rounded-lg shadow-md"/>
                </header>
                <main className="flex flex-col gap-2 text-xl">
                    <h2 className="text-3xl font-bold">Hola, soy Adriel!</h2>
                    <p>Im a product designer living in Brooklyn, interested in how people and software can work together to make life better. Im currently at Snap, where I design experiences around finding and using AR Lenses on Snapchat.</p>
                    <p>I previously worked at ZipRecruiter, where I designed experiences and interfaces to help millions of people get jobs. I started on the marketing design side, honing my visual design skills and learning the ins and outs of keyframe animation, then moved into the world of product.</p>
                    <p>As a designer, I enjoy being a generalist with a focus on craft and prototyping. I value beautiful visuals backed by smart systems thinking. I love the concept that a digital product is a living thing that can adapt and evolve over time.</p>
                </main>
            </div>
            <div className="w-full h-full grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold dark:text-gray-200 mb-2">Habilidades e intereses</h2>
                    <p>Mi práctica en el mundo del diseño incluye trabajos de creación de marcas, identidad, diseño gráfico y textil.</p>
                    <p>Me gusta crear diseños simples pero novedosos, que destaquen del resto y sean representativos tanto del mensaje a transmitir, como de la marca que lo ejecuta.</p>
                    <p>Soy un apasionado por crear productos y experiencias digitales enfocadas en el usuario.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold dark:text-gray-200 mb-2">Formación</h2>
                    <p className="font-semibold"><FontAwesomeIcon icon={faBook} className="mr-2"/>MindHub LAT</p>
                    <p className="italic">Junio - Octubre 2022</p>
                    <p>Bootcamp de +700hs Full Time utilizando metodologías ágiles (SCRUM), desempeñandome en un simulacro de ambiente laboral real.</p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold dark:text-gray-200">¡Extra! ¡Extra!</h2>
            <ul className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hobbiesList}
            </ul>
        </>
    )
}