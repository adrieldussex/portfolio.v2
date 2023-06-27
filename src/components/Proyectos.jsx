export default function Proyectos() {
const proyectos = [
    {
        titulo: 'ADDVRA',
        descripcion: 'Sitio web institucional para la Asociación de Deportes de Disco Volador de la República Argentina.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'InmoFlama',
        descripcion: 'Sitio web empresarial para Inmobiliaria de la ciudad capital de Córdoba.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'Travel App',
        descripcion: 'Sitio web con ciudades del mundo y sus respectivos itinerarios de viajes con recomendaciones.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'Travel App',
        descripcion: 'Sitio web con ciudades del mundo y sus respectivos itinerarios de viajes con recomendaciones.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'Travel App',
        descripcion: 'Sitio web con ciudades del mundo y sus respectivos itinerarios de viajes con recomendaciones.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'Travel App',
        descripcion: 'Sitio web con ciudades del mundo y sus respectivos itinerarios de viajes con recomendaciones.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'Travel App',
        descripcion: 'Sitio web con ciudades del mundo y sus respectivos itinerarios de viajes con recomendaciones.',
        link: '',
        github: '',
        tecnologias: '',
    },
    {
        titulo: 'Travel App',
        descripcion: 'Sitio web con ciudades del mundo y sus respectivos itinerarios de viajes con recomendaciones.',
        link: '',
        github: '',
        tecnologias: '',
    },
    ]

const container = (proyecto) => (
    <article className="group bg-blue-900/20 h-full min-h-[304px] w-[324px] px-[2rem] py-[1.75rem] rounded-[4px] transition-all duration-150 flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg">
        <header className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-gray-200 text-xl group-hover:text-sky-500">{proyecto.titulo}</h3>
                </div>
            </div>
            <p>{proyecto.descripcion}</p>
        </header>
        <footer className="mt-6 flex gap-2 flex-wrap text-sm">
            {/* <hr className="text-light-secondary/50 w-full"/> */}    
            <p>React</p>
            <p>Javascript</p>
            <p>TailwindCSS</p>
        </footer>
    </article>
    )

  return (
    <section className="grid grid-cols-2 gap-6">
        {proyectos.map(container)}
    </section>
  )
}
