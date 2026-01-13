import arrowRightIcon from '../../assets/icons/arrow-right.svg'
import logoImage from '../../assets/logo.png'

export function Footer() {
    return (
        <footer className="w-full bg-[#FF5B04] text-white" style={{ minHeight: '350px', boxSizing: 'border-box' }}>
            <div className="w-full max-w-[1552px] mx-auto px-4 lg:px-8 py-8 lg:py-0 lg:h-[350px] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
                    {/* Left Column - Logo */}
                    <div className="flex items-start justify-center lg:justify-start">
                        <img 
                            src={logoImage} 
                            alt="Yüksi Logo" 
                            className="w-[120px] h-[111px] lg:w-[195px] lg:h-[181px] object-contain"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </div>

                    {/* Middle Column - Bilgi ve Sözleşmeler */}
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h3 className="text-xl lg:text-[26px] leading-[24px] lg:leading-[30px] font-medium mb-1 lg:mb-2 text-center lg:text-left" style={{ fontFamily: 'Roboto' }}>
                            Bilgi ve Sözleşmeler
                        </h3>
                        <ul className="flex flex-col gap-2 lg:gap-3">
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
                                        className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium justify-center lg:justify-start"
                                        style={{ fontFamily: 'Roboto' }}
                                    >
                                        <span>{item}</span>
                                        <img 
                                            src={arrowRightIcon} 
                                            alt="" 
                                            className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Gizlilik ve Sözleşmeler */}
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h3 className="text-xl lg:text-[26px] leading-[24px] lg:leading-[30px] font-medium mb-1 lg:mb-2 text-center lg:text-left" style={{ fontFamily: 'Roboto' }}>
                            Gizlilik ve Sözleşmeler
                        </h3>
                        <ul className="flex flex-col gap-2 lg:gap-3">
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium justify-center lg:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Anasayfa</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium justify-center lg:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>İletişim</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:info@yuksi.com.tr" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium justify-center lg:justify-start break-all"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>info@yuksi.com.tr</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://yuksi.com.tr/resellerv8" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium underline justify-center lg:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Bayi Girişi</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://yuksi.com.tr/restaurantv1" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium underline justify-center lg:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Restaurant Girişi</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://yuksi.com.tr/companyv1" 
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium underline justify-center lg:justify-start"
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    <span>Şirket Girişi</span>
                                    <img 
                                        src={arrowRightIcon} 
                                        alt="" 
                                        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
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
