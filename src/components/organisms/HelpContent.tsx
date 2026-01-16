import phoneKangaroo from '../../assets/help/phone-kangaroo.png';
import logoImage from '../../assets/logo.png';

export function HelpContent() {
    return (
        <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative">
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Side - Phone/Kangaroo Image - Hidden on mobile, visible on larger screens */}
                    <div className="hidden lg:block lg:w-[35%] lg:flex-shrink-0 relative flex items-center justify-center">
                        <div className="relative w-full">
                            <div className="relative w-[240px] h-[320px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[580px] mx-auto">
                                <img
                                    src={phoneKangaroo}
                                    alt="Yüksi telefon kanguru"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Small logo on phone */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-[380px] lg:top-[420px] xl:top-[500px] w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[60px] xl:h-[60px] flex items-center justify-center">
                                <img
                                    src={logoImage}
                                    alt="Yüksi Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Help Topics Section */}
                    <div className="w-full lg:w-[65%] lg:flex-shrink-0">
                        <div
                            className="text-[#333] text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-relaxed whitespace-pre-wrap"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <p className="mb-4 sm:mb-5 lg:mb-6">
                                Her zaman yanınızdayız! Yüksi yardım hattına şu konularda bizimle iletişime geçebilirsiniz
                            </p>
                            
                            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Gönderi Takibi: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Paketinizin güncel durumunu öğrenmek ve teslimat süreci hakkında bilgi almak.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Araç Talebi ve Rezervasyon: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Moto kuryeden kamyona kadar ihtiyacınıza uygun aracı çağırma ya da planlı rezervasyon desteği.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Teslimat Sorunları: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Gecikme, adres değişikliği veya teslimatla ilgili yaşanan her türlü problem için çözüm.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Uygulama ve Web Desteği: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Mobil uygulama ya da web sitemiz üzerinden yaşadığınız teknik sorunlarda yardım.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Fiyatlandırma ve Ödeme: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Ücretlendirme, fatura veya ödeme yöntemleri hakkında bilgi talebi.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Genel Sorular ve Öneriler: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Hizmetlerimizle ilgili merak ettikleriniz veya bize iletmek istediğiniz öneriler.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                 
                    </div>
                </div>
            </div>
        </section>
    );
}
