import Hero from '../components/Hero'
import { Header } from '../components/organisms/Header'
import { VehicleShowcase } from '../components/sections/VehicleShowcase'
import { BusinessPartners } from '../components/sections/BusinessPartners'
import { MobileJoin } from '../components/sections/MobileJoin'
import { ContactCTA } from '../components/sections/ContactCTA'
import { Footer } from '../components/sections/Footer'

export default function Home() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/" />
            <Hero />
            <VehicleShowcase />
            <BusinessPartners />
            <MobileJoin />
            <ContactCTA />
            <Footer />
        </div>
    )
}
