import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export default function DarkMode() {
    const [icon, setIcon] = useState("null")
    const [theme, setTheme] = useState("null")

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }, [])
    
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setIcon(faSun)
      } else {
        document.documentElement.classList.remove("dark");
        setIcon(faMoon)
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIcon(theme === "dark" ? faMoon : faSun)
    };



  return (
        <button onClick={handleThemeSwitch} className="absolute top-10 right-20 hover:bg-gray-100/50 dark:hover:bg-gray-800 rounded-md w-10 h-10 grid place-items-center">
            {}
            <FontAwesomeIcon icon={icon}/>
        </button>   
    )
}
    