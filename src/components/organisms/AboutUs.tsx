import aboutHeroBg from '../../assets/about/about-hero-bg.png';
import kangarooAbout from '../../assets/about/kangaroo-about.png';

export function AboutUs() {
    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={aboutHeroBg}
                    alt="Yüksi lojistik hizmet"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 xl:px-8 py-4 sm:py-8 md:py-12 xl:py-20">
                <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px]">
                    {/* Desktop Content */}
                    <div className="hidden xl:block absolute inset-0 px-8 py-20">
                        <div className="relative w-full h-full flex flex-col justify-center">
                            <div
                                className="text-white text-[65px] font-bold leading-tight whitespace-pre-wrap mb-8"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <p className="mb-0">TÜRKİYE'NİN LOJİSTİK ALT YAPISI</p>
                            </div>
                            
                            <p
                                className="text-white text-[32px] font-semibold leading-[1.15] whitespace-pre-wrap mb-12 max-w-4xl"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                Yüksi olarak vizyonumuz, lojistik sektöründe yenilikçi ve güvenilir hizmet anlayışımızla hem bireylerin hem de işletmelerin hayatını kolaylaştıran, dijital çözümlerle hız ve verimliliği en üst düzeye taşıyan öncü bir marka olmaktır. Teknolojiyi odağımıza alarak müşterilerimizin ihtiyaç duyduğu her ölçekte teslimatı güvenle gerçekleştirmek, sürdürülebilirlik ilkeleriyle büyüyerek hem Türkiye'de hem de uluslararası pazarda tercih edilen lojistik çözüm ortağı olmak istiyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Kangaroo - Bottom Right */}
                    <div className="hidden xl:flex absolute inset-0 items-end justify-end">
                        <div className="relative w-[582px] h-[684px] pr-8 pb-8" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                            <img
                                src={kangarooAbout}
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
