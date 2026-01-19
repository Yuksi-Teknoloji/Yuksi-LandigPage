import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
import { DealerForm } from '../components/organisms/DealerForm'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function Dealer() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('dealer', currentLang)
    const alternateUrls = getAlternateUrls('dealer')

    return (
        <>
            <SEOHead
                title={t('dealer.seo.title')}
                description={t('dealer.seo.description')}
                keywords="yüksi bayi, franchise, bayi başvurusu, lojistik bayi, taşımacılık bayi, Bursa bayi, Türkiye bayi"
                canonical={currentPath}
                lang={currentLang}
                geoData={{
                    address: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                    city: 'Kestel',
                    region: 'Bursa',
                    country: 'TR',
                }}
                alternateLanguages={alternateUrls}
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
                <Header activeItem={currentPath} />
                <DealerForm />
                <Footer />
            </div>
        </>
    )
}
