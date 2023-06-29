import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<About />} path='/' />
          <Route element={<Portfolio />} path='/portfolio' />
          <Route element={<Contacto />} path='/contacto' />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
