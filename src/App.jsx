import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Topbar from './components/Topbar'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Vision from './pages/Vision';
import Footer from './components/Footer';
import Principal from './pages/Principal';
import ApplyOnline from './pages/ApplyOnline';
import FeesStructure from './pages/FeesStructure';
import Courses from './pages/Courses'
import CSE from './pages/CSE';
import AIDS from './pages/AIDS'
import AIML from './pages/AIML'
import IT from './pages/IT'
import ECE from './pages/ECE';
import EEE from './pages/EEE'
import Library from './pages/Library'
import Cafeteria from './pages/Cafeteria';
import Transport from './pages/Transport';
import Research from './pages/Research'
import Placement from './pages/Placement'
import Faculty from './pages/Faculty';
import Downloads from './pages/Downloads';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Topbar/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/principal-message" element={<Principal />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route path="/fee-structure" element={<FeesStructure />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cse" element={<CSE />} />
          <Route path="/ai-ds" element={<AIDS />} />
          <Route path="/it" element={<IT />} />
          <Route path="/ece" element={<ECE />} />
          <Route path="/eee" element={<EEE />} />
          <Route path="/ai-ml" element={<AIML />} />
          <Route path="/library" element={<Library />} />
          <Route path="/cafeteria" element={<Cafeteria />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/research" element={<Research />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>      
      <Footer/>
    </>
  )
}

export default App