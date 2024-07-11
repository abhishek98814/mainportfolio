import './App.css'
import NavBar from './common/NavBar'
import Home from './components/view/Home'
import About from './components/view/About'
import Service from './components/view/Service'
import Portfolio from './components/view/Portfolio'
import Contact from './components/view/Contact'
import Footer from './common/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <main className='common_component'>

      </main>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
