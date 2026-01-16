import { Header } from '../components/organisms/Header';
import { HelpHero } from '../components/organisms/HelpHero';
import { HelpContent } from '../components/organisms/HelpContent';
import { Footer } from '../components/organisms/Footer';
import { SEOHead } from '../components/molecules/SEOHead';

export default function Help() {
    return (
        <>
            <SEOHead
                title="Yardım ve Destek - Yüksi Lojistik"
                description="Yüksi Lojistik yardım merkezi. Sık sorulan sorular, kullanım kılavuzu, teknik destek ve müşteri hizmetleri. Size nasıl yardımcı olabiliriz?"
                keywords="yüksi yardım, lojistik destek, müşteri hizmetleri, sık sorulan sorular, teknik destek, kullanım kılavuzu"
                canonical="/help"
                geoData={{
                    address: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                    city: 'Kestel',
                    region: 'Bursa',
                    country: 'TR',
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem="/help" />
                <HelpHero />
                <HelpContent />
                <Footer />
            </div>
        </>
    );
}
