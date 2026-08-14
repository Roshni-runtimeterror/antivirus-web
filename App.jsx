import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SecurityProvider } from './context/SecurityContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Scan from './pages/Scan'
import Features from './pages/Features'
import ThreatCenter from './pages/ThreatCenter'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <SecurityProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scan" element={<Scan />} />
              <Route path="/features" element={<Features />} />
              <Route path="/threats" element={<ThreatCenter />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SecurityProvider>
  )
}

export default App
