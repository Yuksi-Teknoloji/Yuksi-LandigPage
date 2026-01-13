import servicesHeroBg from '../../assets/services/hero-bg.png';
import kangarooServices from '../../assets/services/kangaroo-services.png';

export function ServicesHero() {
    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={servicesHeroBg}
                    alt="Yüksi lojistik hizmet"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-4 sm:px-6 xl:px-8 py-4 sm:py-8 md:py-12 xl:py-20">
                <div className="relative w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                    {/* Left Side - Text Content */}
                    <div className="w-full lg:max-w-[50%] flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-8">
                        {/* Main Title */}
                        <h1
                            className="text-white text-[32px] sm:text-[48px] md:text-[64px] xl:text-[96px] font-bold leading-tight sm:leading-normal whitespace-pre-wrap"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            SİZE YÜKSE{'\n'}BİZE YÜKSİ
                        </h1>
                        
                        {/* Description Text */}
                        <p
                            className="text-white text-sm sm:text-base md:text-lg xl:text-[32px] font-semibold leading-relaxed sm:leading-[1.15] whitespace-pre-wrap"
                            style={{
                                fontFamily: 'Urbanist, sans-serif',
                                fontWeight: 600,
                            }}
                        >
                            Yüksi, modern lojistik ihtiyaçlarınıza hızlı ve esnek çözümler sunar. İster mobil uygulamamızdan ister web sitemizden kolayca araç çağırabilir, motokuryeden minivan, panelvan, kamyonet ve kamyona kadar geniş araç filomuzla gönderilerinizi güvenle taşıtabilirsiniz. Hızlı, pratik ve güvenilir hizmet için Yüksi her zaman yanınızda.
                        </p>
                    </div>

                    {/* Right Side - Kangaroo Image */}
                    <div className="hidden xl:flex items-center justify-center flex-shrink-0">
                        <div className="relative w-[563px] h-[747px]" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                            <img
                                src={kangarooServices}
                                alt="Yüksi kanguru"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
