import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { ContactFormSection } from '../components/organisms/ContactFormSection';
import { SEOHead } from '../components/molecules/SEOHead';

export default function Contact() {
    return (
        <>
            <SEOHead
                title="İletişim - Yüksi"
                description="Yüksi ile iletişime geçin. Bursa merkezli ofisimiz: Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73, Kestel/BURSA. Telefon: 0850 241 93 16 | Email: info@yuksi.tr"
                keywords="yüksi iletişim, lojistik firması iletişim, Bursa lojistik adres, taşımacılık telefon, nakliye email"
                canonical="/contact"
                geoData={{
                    address: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                    city: 'Kestel',
                    region: 'Bursa',
                    country: 'TR',
                }}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'ContactPage',
                    mainEntity: {
                        '@type': 'LocalBusiness',
                        name: 'Yüksi',
                        telephone: '+908502419316',
                        email: 'info@yuksi.tr',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                            addressLocality: 'Kestel',
                            addressRegion: 'Bursa',
                            addressCountry: 'TR',
                        },
                    },
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem="/contact" />
                <ContactFormSection />
                <Footer />
            </div>
        </>
    );
}

