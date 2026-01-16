import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { DealerForm } from '../components/organisms/DealerForm';
import { SEOHead } from '../components/molecules/SEOHead';

export default function Dealer() {
    return (
        <>
            <SEOHead
                title="Bayi Başvurusu - Yüksi Lojistik"
                description="Yüksi Lojistik bayi olmak için başvurun. Franchise fırsatları, bayi koşulları ve avantajları hakkında bilgi alın. Bursa merkezli, Türkiye genelinde bayi ağımıza katılın."
                keywords="yüksi bayi, franchise, bayi başvurusu, lojistik bayi, taşımacılık bayi, Bursa bayi, Türkiye bayi"
                canonical="/dealer"
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
                        name: 'Yüksi Lojistik',
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
                <Header activeItem="/dealer" />
                <DealerForm />
                <Footer />
            </div>
        </>
    );
}
