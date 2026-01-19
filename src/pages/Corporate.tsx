import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { CorporateForm } from '../components/organisms/CorporateForm';
import { SEOHead } from '../components/molecules/SEOHead';

export default function Corporate() {
    return (
        <>
            <SEOHead
                title="Kurumsal Üyelik - Yüksi"
                description="Yüksi kurumsal üyelik başvurusu. Kurumsal müşteriler için özel fiyatlandırma ve avantajlar. Bursa merkezli, Türkiye genelinde kurumsal lojistik çözümleri."
                keywords="yüksi kurumsal üyelik, kurumsal lojistik, kurumsal taşımacılık, işletme lojistik, kurumsal müşteri, Bursa kurumsal lojistik"
                canonical="/corporate"
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
                <Header activeItem="/corporate" />
                <CorporateForm />
                <Footer />
            </div>
        </>
    );
}
