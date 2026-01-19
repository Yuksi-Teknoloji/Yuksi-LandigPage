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
                {/* Home - all languages use root */}
                <Route path="/" element={<Home />} />

                {/* About page - multi-language URLs */}
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/uber-uns" element={<About />} />

                {/* Services page - multi-language URLs */}
                <Route path="/hizmetler" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="/dienstleistungen" element={<Services />} />

                {/* Help page - multi-language URLs */}
                <Route path="/yardim" element={<Help />} />
                <Route path="/help" element={<Help />} />
                <Route path="/hilfe" element={<Help />} />

                {/* Contact page - multi-language URLs */}
                <Route path="/iletisim" element={<Contact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/kontakt" element={<Contact />} />

                {/* Carrier/Driver Application page - multi-language URLs */}
                <Route path="/surucu-basvuru" element={<Carrier />} />
                <Route path="/driver-application" element={<Carrier />} />
                <Route path="/fahrer-bewerbung" element={<Carrier />} />
                <Route path="/carrier" element={<Carrier />} /> {/* Legacy URL */}

                {/* Dealer Application page - multi-language URLs */}
                <Route path="/bayi-basvuru" element={<Dealer />} />
                <Route path="/dealer-application" element={<Dealer />} />
                <Route path="/handler-bewerbung" element={<Dealer />} />
                <Route path="/dealer" element={<Dealer />} /> {/* Legacy URL */}

                {/* Corporate Membership page - multi-language URLs */}
                <Route path="/kurumsal-uyelik" element={<Corporate />} />
                <Route path="/corporate-membership" element={<Corporate />} />
                <Route path="/firmenmitgliedschaft" element={<Corporate />} />
                <Route path="/corporate" element={<Corporate />} /> {/* Legacy URL */}

                {/* Vehiclese - multi-language URLs */}
                <Route path="/arac-siniflarimiz" element={<Vehiclese />} />
                <Route path="/vehicle-classes" element={<Vehiclese />} />
                <Route path="/fahrzeugklassen" element={<Vehiclese />} />
                <Route path="/vehiclese" element={<Vehiclese />} /> {/* Legacy URL */}
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
