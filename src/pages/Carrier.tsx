import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { CarrierForm } from '../components/organisms/CarrierForm';
import { SEOHead } from '../components/molecules/SEOHead';

export default function Carrier() {
    return (
        <>
            <SEOHead
                title="Kurye ve Taşıyıcı Başvurusu - Yüksi"
                description="Yüksi'ye kurye veya taşıyıcı olarak başvurun. Motorsiklet, minivan, panelvan, kamyonet veya kamyon ile çalışma fırsatı. Esnek çalışma saatleri ve rekabetçi ücretler."
                keywords="kurye iş ilanları, taşıyıcı başvurusu, lojistik iş fırsatları, kurye olmak, taşımacılık işi, Bursa kurye işi"
                canonical="/carrier"
                geoData={{
                    address: 'Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73',
                    city: 'Kestel',
                    region: 'Bursa',
                    country: 'TR',
                }}
            />
            <Header activeItem="/carrier" />
            <CarrierForm />
            <Footer />
        </>
    );
}
