import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
