import { Header } from '../components/organisms/Header'
import { AboutUs } from '../components/sections/AboutUs'
import { AboutContent } from '../components/sections/AboutContent'
import { Footer } from '../components/sections/Footer'

export default function About() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/about" />
            <AboutUs />
            <AboutContent />
            <Footer />
        </div>
    )
}
