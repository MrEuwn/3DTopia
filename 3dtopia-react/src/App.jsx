import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Keychains from './pages/Keychains.jsx'
import Custom from './pages/Custom.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col pt-[88px]">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/keychains" element={<Keychains />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer withHeart />
    </div>
  )
}
