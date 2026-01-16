import Hero from '../components/organisms/Hero'
import { Header } from '../components/organisms/Header'
import { VehicleShowcase } from '../components/organisms/VehicleShowcase'
import { BusinessPartners } from '../components/organisms/BusinessPartners'
import { MobileJoin } from '../components/organisms/MobileJoin'
import { ContactCTA } from '../components/organisms/ContactCTA'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'

export default function Home() {
    return (
        <>
            <SEOHead
                title="Yüksi Lojistik - Modern Lojistik Çözümleri"
                description="Yüksi ile lojistik ihtiyaçlarınıza hızlı ve esnek çözümler. Motokurye, minivan, panelvan, kamyonet ve kamyon hizmetleri. Bursa ve Türkiye genelinde güvenilir taşımacılık."
                keywords="yüksi, lojistik, kurye, nakliye, taşımacılık, motorsiklet kurye, minivan, panelvan, kamyonet, kamyon, Bursa lojistik, Türkiye lojistik, hızlı teslimat, güvenilir lojistik"
                canonical="/"
                geoData={{
                    address: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                    city: 'Kestel',
                    region: 'Bursa',
                    country: 'TR',
                }}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    '@id': 'https://yuksi.com.tr',
                    name: 'Yüksi Lojistik',
                    alternateName: 'Yüksi',
                    url: 'https://yuksi.com.tr',
                    logo: 'https://yuksi.com.tr/logo.png',
                    description: 'Modern lojistik çözümleri ile yanınızdayız. Motokurye, minivan, panelvan, kamyonet ve kamyon hizmetleri.',
                    telephone: '+908502419316',
                    email: 'info@yuksi.tr',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                        addressLocality: 'Kestel',
                        addressRegion: 'Bursa',
                        addressCountry: 'TR',
                    },
                    priceRange: '$$',
                    areaServed: {
                        '@type': 'Country',
                        name: 'Türkiye',
                    },
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: 'Lojistik Hizmetleri',
                        itemListElement: [
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Motorsiklet Kurye',
                                    description: '40-50 kg\'a kadar hızlı teslimat hizmeti',
                                },
                            },
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Minivan Taşımacılık',
                                    description: '500-800 kg\'a kadar şehir içi taşımacılık',
                                },
                            },
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Panelvan Taşımacılık',
                                    description: '1.000-1.500 kg\'a kadar profesyonel nakliye',
                                },
                            },
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Kamyonet Taşımacılık',
                                    description: '1.500-3.500 kg\'a kadar ticari sevkiyat',
                                },
                            },
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Kamyon Taşımacılık',
                                    description: '3.500-20.000 kg\'a kadar ağır yük taşımacılığı',
                                },
                            },
                        ],
                    },
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem="/" />
                <Hero />
                <BusinessPartners />

                <VehicleShowcase />
                <MobileJoin />
                <ContactCTA />
                <Footer />
            </div>
        </>
    )
}
