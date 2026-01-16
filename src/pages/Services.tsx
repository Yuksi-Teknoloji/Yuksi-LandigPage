import { Header } from '../components/organisms/Header'
import { ServicesHero } from '../components/organisms/ServicesHero'
import { VehicleServiceSection } from '../components/organisms/VehicleServiceSection'
import { Footer } from '../components/organisms/Footer'
import motorcycleImg from '../assets/services/motorcycle.png'
import minivanImg from '../assets/services/minivan.png'
import panelvanImg from '../assets/services/panelvan.png'
import kamyonetImg from '../assets/services/kamyonet.png'
import kamyonImg from '../assets/services/kamyon.png'

export default function Services() {
    const vehicles = [
        {
            title: 'Motorsiklet',
            description: `Moto kuryeler genelde 40–50 kg'a kadar yük taşıyabilir. Ama ister sadece bir zarf olsun, ister market poşeti ya da paket yemek, hepsi güvenle teslim edilir.

Yemek siparişinden alışveriş ürünlerine, ilaçtan belgeye kadar pek çok şeyi hızlıca ulaştırmak için moto kuryeler şehirde en pratik çözümdür.`,
            image: motorcycleImg,
            imageAlt: 'Yüksi Motorsiklet',
            secondaryButtonText: 'Kurye İçin Başvur',
        },
        {
            title: 'Minivan',
            description: `Minivanlar genelde 500–800 kg'a kadar yük taşıyabilir. İster birkaç koli, ister küçük ev eşyaları ya da toplu alışveriş ürünleri olsun, hepsi rahatlıkla sığar.

Taşınmadan ofis ihtiyaçlarına, market teslimatından küçük nakliyeye kadar minivanlar şehir içi pratik ve güvenli çözümler sunar.`,
            image: minivanImg,
            imageAlt: 'Yüksi Minivan',
            secondaryButtonText: 'Ekspres İçin Başvur',
        },
        {
            title: 'Panelvan',
            description: `Panelvanlar genelde 1.000–1.500 kg'a kadar yük taşıyabilir. İster büyük koliler, ister mobilya ya da toplu sipariş ürünleri olsun, geniş hacimleriyle hepsi kolayca taşınır.

Ev taşımadan mağaza sevkiyatına, e-ticaret teslimatından profesyonel nakliyeye kadar panelvanlar güvenli ve güçlü bir çözümdür.`,
            image: panelvanImg,
            imageAlt: 'Yüksi Panelvan',
            secondaryButtonText: 'Ekspres İçin Başvur',
        },
        {
            title: 'Kamyonet',
            description: `Kamyonetler genelde 1.500–3.500 kg'a kadar yük taşıyabilir. İster inşaat malzemesi, ister büyük mobilyalar ya da toplu ticari ürünler olsun, güçlü yapıları sayesinde kolayca taşınır.

Nakliyeden ticari sevkiyata, pazar ve mağaza teslimatından tarım ürünlerine kadar kamyonetler hem şehir içi hem de şehirler arası güvenilir çözümler sunar.`,
            image: kamyonetImg,
            imageAlt: 'Yüksi Kamyonet',
            secondaryButtonText: 'Taşımacılık İçin Başvur',
        },
        {
            title: 'Kamyon',
            description: `Kamyonlar genelde 3.500 kg'dan başlayıp 20.000 kg'a kadar yük taşıyabilir. İster ağır makineler, ister büyük hacimli eşyalar ya da toplu ticari ürünler olsun, geniş kasa ve güçlü motorları sayesinde rahatça taşınır.

Şehirler arası taşımacılıktan lojistik sevkiyata, inşaat malzemelerinden endüstriyel ürünlere kadar kamyonlar güvenli ve yüksek kapasiteli çözümler sunar.`,
            image: kamyonImg,
            imageAlt: 'Yüksi Kamyon',
            secondaryButtonText: 'Taşımacılık İçin Başvur',
        },
    ];

    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/services" />
            <ServicesHero />
            
            {/* Mobile-only text section - shown only on mobile */}
            <section className="md:hidden w-full bg-white py-8 px-4 sm:px-6">
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-4">
                    <h1
                        className="text-[#FF5B04] text-[24px] font-bold leading-tight"
                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                    >
                        SİZE YÜKSE BİZE YÜKSİ
                    </h1>
                    
                    <p
                        className="text-[#333] text-[16px] font-semibold leading-relaxed"
                        style={{
                            fontFamily: 'Urbanist, sans-serif',
                            fontWeight: 600,
                        }}
                    >
                        Yüksi, modern lojistik ihtiyaçlarınıza hızlı ve esnek çözümler sunar. İster mobil uygulamamızdan ister web sitemizden kolayca araç çağırabilir, motokuryeden minivan, panelvan, kamyonet ve kamyona kadar geniş araç filomuzla gönderilerinizi güvenle taşıtabilirsiniz. Hızlı, pratik ve güvenilir hizmet için Yüksi her zaman yanınızda.
                    </p>
                </div>
            </section>
            
            {vehicles.map((vehicle, index) => (
                <VehicleServiceSection
                    key={index}
                    title={vehicle.title}
                    description={vehicle.description}
                    image={vehicle.image}
                    imageAlt={vehicle.imageAlt}
                    secondaryButtonText={vehicle.secondaryButtonText}
                />
            ))}
            <Footer />
        </div>
    )
}
