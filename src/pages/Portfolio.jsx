import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as LinkRouter } from 'react-router-dom';

export default function Portfolio() {
    const proyectos = [
        { año: '2023', nombre: 'Anqas Yuraq', categoria: 'Branding', herramientas: ['Illustrator', 'Photoshop'], link: '' },
        { año: '2023', nombre: 'Torneo Nacional Mixto', categoria: 'Branding', herramientas: ['Illustrator', 'Photoshop'], link: '' },
        { año: '2022', nombre: 'ADDVRA', categoria: 'Web Developer', herramientas: ['React', 'Tailwind'], link: '' },
        { año: '2020', nombre: 'Malón Querandí', categoria: 'Branding', herramientas: ['Illustrator', 'Photoshop'], link: '' },
    ]

  return (
    <>        
    <div className="w-full h-full">
        <div className="text-center w-3/4 mx-auto">
            <p className="text-2xl font-semibold dark:text-gray-100">Estos son algunos proyectos en los que he trabajado.</p>
        </div>
    </div>
    <table className="w-full table-auto border-collapse text-left mt-4">
        <thead className="dark:text-gray-100 bg-gray-200 dark:bg-gray-900 sticky top-0 border-b border-gray-600/20 dark:border-gray-200/10">
            <tr>
                <th className="py-4 pr-4">Año</th>
                <th className="py-4 pr-4">Proyecto</th>
                <th className="py-4 pr-4">Categoría</th>
                <th className="py-4 pr-4">Hecho con</th>
                <th className="py-4 pr-4">Link</th>
            </tr>
        </thead>
        <tbody>
            {proyectos.map(proyecto => (
            <tr className="border-b border-gray-600/20 last:border-none dark:border-gray-200/10" key={proyecto.nombre}>
                <td className="py-4 pr-4">{proyecto.año}</td>
                <td className="py-4 pr-4 font-semibold">{proyecto.nombre}</td>
                <td className="py-4 pr-4">{proyecto.categoria}</td>
                <td className="py-4 pr-4">{proyecto.herramientas.map((e) => (
                    <p key={e}>{e}</p>
                ))}</td>
                <td className="py-4 pr-4">
                    <LinkRouter to={proyecto.link} target='_blank' className="hover:bg-gray-100/50 dark:hover:bg-gray-800 rounded-md w-10 h-10 grid place-items-center">
                        <FontAwesomeIcon icon={faLink}/>
                    </LinkRouter>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</>
  )
}
