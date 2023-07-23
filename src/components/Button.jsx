import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button() {
    return (
        <a href='#' className="md:w-1/3 lg:w-2/4 rounded-t-md bg-gray-50/20 dark:bg-gray-800/20 border-b-4 border-b-transparent hover:border-b-sky-500 dark:hover:border-b-sky-500 h-full py-4 text-gray-800 dark:text-gray-200 font-semibold tracking-wider border-t-[1px] border-gray-100/80 dark:border-gray-800/30 flex gap-3 justify-center items-center">
            <FontAwesomeIcon icon={faFileArrowDown} className="text-xl"/>
            <p>Descargar CV</p>
        </a>
    )
}