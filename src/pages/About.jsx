export default function Home() {
    return (
        <>        
            <div className="w-full h-full flex gap-4 bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
                <div className="w-1/2 flex flex-col gap-2">
                    <p>Soy desarrollador Full Stack, apasionado por el diseño y por trabajar en proyectos nuevos y novedosos. Busco desafiarme y crecer profesionalmente creando, diseñando y pensando aplicaciones funcionales que destaquen del resto.</p>
                    <p>Tengo conocimientos en herramientas de edición gráfica como Adobe Illustrator y Adobe Photoshop. Y me encuentro en práctica de manejo de herramientas de prototipado como Figma.</p>
                </div>
                <img src="https://avatars.githubusercontent.com/u/110680123?v=4" alt="Adriel Dussex" className="w-1/2 overflow-hidden border-b-4 object-contain h-full border-yellow-500"/>
            </div>
            <div className="w-full min-h-[24vh] h-full bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
                <p>Completé el Bootcamp de MERN dictado por MindHub, bajo la metodología AGILE, permitiendo desempeñarme en un simulacro de ambiente laboral real.</p>
            </div>
            <div className="w-full min-h-[24vh] h-full bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
                <p>Hobbies</p>
            </div>
        </>
    )
}