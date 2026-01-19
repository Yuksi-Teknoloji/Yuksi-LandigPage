import { useTranslation } from 'react-i18next';
import kamyonImg from '../../assets/services/kamyon.png';
import minivanImg from '../../assets/services/minivan.png';
import motorcycleImg from '../../assets/services/motorcycle.png';

export function BusinessPartners() {
    const { t } = useTranslation();

    const sectors = [
        {
            name: t('home.businessPartners.logistics.name'),
            image: kamyonImg,
            description: t('home.businessPartners.logistics.description')
        },
        {
            name: t('home.businessPartners.cargo.name'),
            image: minivanImg,
            description: t('home.businessPartners.cargo.description')
        },
        {
            name: t('home.businessPartners.courier.name'),
            image: motorcycleImg,
            description: t('home.businessPartners.courier.description')
        },
    ];

    return (
        <section className="w-full bg-white text-gray-900">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#333333] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-center sm:text-left">
                    {t('home.businessPartners.title')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-[#FF5B04] to-[#FF8C42] text-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]"
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full -mr-10 sm:-mr-12 md:-mr-16 -mt-10 sm:-mt-12 md:-mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full -ml-8 sm:-ml-10 md:-ml-12 -mb-8 sm:-mb-10 md:-mb-12"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center w-full px-2">
                                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 transform group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={sector.image}
                                        alt={sector.name}
                                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain drop-shadow-2xl"
                                    />
                                </div>

                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4">
                                    {sector.name}
                                </h3>

                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 text-center max-w-[280px] sm:max-w-[300px] md:max-w-xs lg:max-w-sm leading-relaxed px-2">
                                    {sector.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
