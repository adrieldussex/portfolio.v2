import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <>        
            <div className="w-full h-full flex gap-4 bg-gray-100/50 dark:bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  dark:border-gray-800/30 p-4">
                <div className="w-1/2 flex flex-col gap-2">
                    <p>Soy desarrollador Full Stack, apasionado por el diseño y por trabajar en proyectos nuevos y novedosos. Busco desafiarme y crecer profesionalmente creando, diseñando y pensando aplicaciones funcionales que destaquen del resto.</p>
                    <p>Tengo conocimientos en herramientas de edición gráfica como Adobe Illustrator y Adobe Photoshop. Y me encuentro en práctica de manejo de herramientas de prototipado como Figma.</p>
                </div>
                <img src="https://avatars.githubusercontent.com/u/110680123?v=4" alt="Adriel Dussex" className="w-1/2 overflow-hidden border-b-4 object-contain h-full border-yellow-500"/>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-semibold dark:text-gray-200 mb-2">Habilidades e intereses</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae expedita accusantium voluptatem neque beatae inventore fuga at, accusamus praesentium dolor excepturi quibusdam labore, omnis amet ratione ipsa voluptates odio repellat ab veniam aspernatur veritatis quaerat nesciunt tempore! Aliquam voluptatum odit maxime sed laborum doloribus, aspernatur eum iusto ut obcaecati ipsum?</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold dark:text-gray-200 mb-2">Formación</h2>
                    <p className="font-semibold"><FontAwesomeIcon icon={faBook} className="mr-2"/>MindHub LAT</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, similique!</p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold dark:text-gray-200">¡Extra! ¡Extra!</h2>
            <div className="w-full h-full grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="bg-red-200 h-24 w-full rounded-md" />
                    <p className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="bg-blue-200 h-24 w-full rounded-md" />
                    <p className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="bg-yellow-200 h-24 w-full rounded-md" />
                    <p className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="bg-violet-200 h-24 w-full rounded-md" />
                    <p className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </>
    )
}