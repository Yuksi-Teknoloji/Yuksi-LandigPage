import { useTranslation } from 'react-i18next';
import aboutHeroBg from '../../assets/about/about-hero-bg.png';
import kangarooAbout from '../../assets/about/kangaroo-about.png';

export function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={aboutHeroBg}
                    alt={t('about.hero.imageAlt')}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 xl:px-8 py-4 sm:py-8 md:py-12 xl:py-20">
                <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px]">
                    {/* Desktop Content */}
                    <div className="hidden xl:block absolute inset-0 px-8 py-20">
                        <div className="relative w-full h-full flex flex-col justify-center max-w-[50%]">
                            <div
                                className="text-white text-[65px] font-bold leading-tight whitespace-pre-wrap mb-8"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <p className="mb-0">{t('about.hero.title')}</p>
                            </div>

                            <p
                                className="text-white text-[32px] font-semibold leading-[1.15] whitespace-pre-wrap mb-12 max-w-4xl"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                {t('about.hero.description')}
                            </p>
                        </div>
                    </div>

                    {/* Kangaroo - Bottom Right */}
                    <div className="hidden xl:flex absolute inset-0 items-end justify-end">
                        <div className="relative w-[582px] h-[684px] pr-8 pb-8" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                            <img
                                src={kangarooAbout}
                                alt={t('about.hero.kangarooAlt')}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
