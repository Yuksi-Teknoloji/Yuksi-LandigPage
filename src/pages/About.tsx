import { Header } from '../components/organisms/Header'
import { AboutUs } from '../components/organisms/AboutUs'
import { AboutContent } from '../components/organisms/AboutContent'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'

export default function About() {
    return (
        <>
            <SEOHead
                title="Hakkımızda - Yüksi Lojistik"
                description="Yüksi Lojistik hakkında bilgi edinin. Modern lojistik çözümleri sunan, müşteri memnuniyetini ön planda tutan güvenilir taşımacılık firması. Bursa merkezli, Türkiye genelinde hizmet veriyoruz."
                keywords="yüksi hakkında, lojistik firması, taşımacılık şirketi, Bursa lojistik, güvenilir nakliye, müşteri odaklı lojistik"
                canonical="/about"
                geoData={{
                    address: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                    city: 'Kestel',
                    region: 'Bursa',
                    country: 'TR',
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem="/about" />
                <AboutUs />
                <AboutContent />
                <Footer />
            </div>
        </>
    )
}
