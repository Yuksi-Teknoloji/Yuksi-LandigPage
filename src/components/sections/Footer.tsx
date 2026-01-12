import arrowRightIcon from '../../assets/icons/arrow-right.svg'
import logoImage from '../../assets/logo.png'

export function Footer() {
    return (
        <footer className="w-full bg-[#FF5B04] text-white" style={{ minHeight: '350px', boxSizing: 'border-box' }}>
            <div className="w-full max-w-[1552px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-0 lg:h-[350px] flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full">
                    {/* Left Column - Logo */}
                    <div className="flex items-start justify-center sm:justify-start">
                        <img 
                            src={logoImage} 
                            alt="Yüksi Logo" 
                            className="w-[120px] h-[111px] sm:w-[150px] sm:h-[139px] md:w-[175px] md:h-[162px] lg:w-[195px] lg:h-[181px] object-contain"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </div>

                    {/* Middle Column - Bilgi ve Sözleşmeler */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h3 className="text-xl sm:text-2xl md:text-[26px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-medium mb-1 sm:mb-2 text-center sm:text-left" style={{ fontFamily: 'Roboto' }}>
                            Bilgi ve Sözleşmeler
                        </h3>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            {[
                                'Yüksi Hakkımızda',
                                'Kurye Gizlilik Sözleşmesi',
                                'Kurye Taşıyıcı Sözleşmesi',
                                'Gizlilik Sözleşmesi',
                                'Kullanıcı Sözleşmesi'
                            ].map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href="#" 
                                        className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium justify-center sm:justify-start"
                                        style={{ fontFamily: 'Roboto' }}
                                    >
                                        <span>{item}</span>
                                        <img 
                                            src={arrowRightIcon} 
                                            alt="" 
                                            className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Gizlilik ve Sözleşmeler */}
                    <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-xl sm:text-2xl md:text-[26px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-medium mb-1 sm:mb-2 text-center sm:text-left" style={{ fontFamily: 'Roboto' }}>
                            Gizlilik ve Sözleşmeler
                        </h3>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium justify-center sm:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Anasayfa</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium justify-center sm:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>İletişim</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:info@yuksi.com.tr" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium justify-center sm:justify-start break-all"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>info@yuksi.com.tr</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium underline justify-center sm:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Bayi Girişi</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium underline justify-center sm:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Restaurant Girişi</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[18px] md:leading-[19px] font-medium justify-center sm:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Şirket Girişi</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.53px] md:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
