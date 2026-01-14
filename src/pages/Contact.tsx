import { Header } from '../components/organisms/Header';
import { Footer } from '../components/sections/Footer';
import { ContactFormSection } from '../components/sections/ContactFormSection';

export default function Contact() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/contact" />
            <ContactFormSection />
            <Footer />
        </div>
    );
}

