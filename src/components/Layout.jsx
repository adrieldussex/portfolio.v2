import Nav from "./Nav"
import Header from "./Header"

export default function Layout(props) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-400 font-sans">
        <div className="container mx-auto w-4/5 xl:w-3/5 flex flex-col lg:flex-row lg:gap-6 xl:gap-4">
            <Header />
            <main className="w-full lg:w-3/5 lg:py-24 h-full flex flex-col gap-4">
                <Nav />
                {props.children}
            </main>
        </div>
    </div>
  )
}
