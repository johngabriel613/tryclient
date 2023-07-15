import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Builder from "./pages/Builder"
import Components from "./pages/Components"
import NotFound from "./pages/Notfound"
import Cpu from "./components/Cpu"
import Motherboard from "./components/Motherboard"
import Memory from "./components/Memory"
import Psu from "./components/Psu"
import Layout from './template/Layout.jsx';
import Details from "./components/Details"
import Gpu from "./components/Gpu"
import SharedLink from "./components/SharedLink"
import About from "./pages/About"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/builder' element={<Builder/>}/>
        <Route path='/builder/:id' element={<SharedLink/>}/>
        <Route path='/components/' element={<Components/>}>
          <Route path="cpu" element={<Cpu />} />
          <Route path="motherboard" element={<Motherboard />} />
          <Route path="memory" element={<Memory />} />
          <Route path="gpu" element={<Gpu />} />
          <Route path="psu" element={<Psu/>} />
        </Route>
        <Route path="components/cpu/:id" element={<Details componentType="cpu" />} />
        <Route path="components/motherboard/:id" element={<Details componentType="motherboard" />} />
        <Route path="components/memory/:id" element={<Details componentType="memory" />} />
        <Route path="components/gpu/:id" element={<Details componentType="gpu" />} />
        <Route path="components/psu/:id" element={<Details componentType="psu" />} />
        <Route path='/components/*' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
