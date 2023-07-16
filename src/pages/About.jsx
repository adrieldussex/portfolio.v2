import { faBook, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    const skills = ['JavaScript', 'React', 'NodeJS', 'TailwindCSS', 'WordPress']

    const skillsList = skills.map(skill => 
        <li key={skill}>
            <FontAwesomeIcon icon={faCaretRight} className="mr-2"/>
            {skill}
        </li>
        )

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
            <div className="w-full h-full flex flex-col-reverse lg:flex-row gap-4 bg-gray-100/50 dark:bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  dark:border-gray-800/30 p-4">
                <div className="lg:w-1/2 flex flex-col gap-2">
                    <p>Desde muy chico me gustó encaminarme siempre en distintos proyectos. Con un corazón emprendedor, me fui formando y adquiriendo experiencia en diseño gráfico y creación de marcas.</p>
                    <p>Actualmente, mi enfoque principal está en crear y trabajar en proyectos que me permitan nutrir y desarrollar mis habilidades.</p>
                    <p>Estas son algunas tecnologías con las que he trabajado recientemente:</p>
                    <ul className="grid grid-cols-2 w-full md:w-1/2 lg:w-full">
                        {skillsList}
                    </ul>
                </div>
                <img src="https://avatars.githubusercontent.com/u/110680123?v=4" alt="Adriel Dussex" className="md:mx-auto md:w-1/2 overflow-hidden border-b-4 object-contain h-full border-yellow-500"/>
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