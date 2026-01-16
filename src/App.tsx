import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Help from './pages/Help'
import Carrier from './pages/Carrier'
import Contact from './pages/Contact'
import Vehiclese from './pages/Vehiclese'
import Dealer from './pages/Dealer'
import Corporate from './pages/Corporate'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/help" element={<Help />} />
                <Route path="/carrier" element={<Carrier />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vehiclese" element={<Vehiclese />} />
                <Route path="/dealer" element={<Dealer />} />
                <Route path="/corporate" element={<Corporate />} />
            </Routes>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
        </BrowserRouter>
    )
}

export default App
