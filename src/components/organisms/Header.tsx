import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import kanguruGif from '../../assets/hero/kanguru.gif';

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: {
    src?: string;
    text?: string;
    alt?: string;
  };
  navigationItems?: NavigationItem[];
  activeItem?: string;
}

const BASE_NAV_ITEMS: NavigationItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'Hizmetler', href: '/services' },
  { label: 'Yardım', href: '/help' },
  { label: 'İletişim', href: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({
  logo,
  navigationItems = [],
  activeItem,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isApplicationMenuOpen, setIsApplicationMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const resolvedActiveItem =
    activeItem ?? (typeof window !== 'undefined' ? window.location.pathname : undefined);

  const defaultNavItems: NavigationItem[] =
    navigationItems.length > 0 ? navigationItems : BASE_NAV_ITEMS;

  const headerBg = isScrolled
    ? 'bg-white text-gray-900 lg:bg-white lg:text-gray-900'
    : 'bg-[#FF5B04] text-white lg:bg-white lg:text-gray-900';

  const iconColor = isScrolled
    ? 'text-[#FF5B04] hover:text-[#FF5B04] hover:bg-orange-50 focus:ring-orange-500'
    : 'text-white hover:text-white hover:bg-white/10 focus:ring-white/50';
  
  // SVG icon filter for orange color (#FF5B04)
  const iconFilter = isScrolled
    ? { filter: 'brightness(0) saturate(100%) invert(48%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(1.2)' }
    : { filter: 'brightness(0) invert(1)' };

  const barVisible = !isScrolled;
  const logoWrapper = isScrolled ? 'w-[140px] lg:w-auto' : 'w-[150px] lg:w-auto';
  const logoFilter = !isScrolled
    ? 'brightness-0 invert lg:filter-none lg:brightness-100 lg:invert-0'
    : 'filter-none';

  return (
    <>
      <header className={`${headerBg} sticky top-0 z-50 relative`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
            <Link
              to="/"
              className={`flex-shrink-0 ${logoWrapper} order-2 lg:order-1 pl-4 lg:pl-0 cursor-pointer`}
            >
              <Logo
                src={logo?.src}
                text={logo?.text}
                alt={logo?.alt}
                className={`transition-all duration-300 ${logoFilter}`}
              />
            </Link>

            <div className="hidden lg:flex lg:items-center gap-8 lg:order-2">
              <Navigation
                items={defaultNavItems}
                activeItem={resolvedActiveItem}
              />

              <div
                className="relative"
                onMouseEnter={() => setIsMobileMenuOpen(false)}
              >
                <div className="group relative">
                  <button
                    type="button"
                    className="text-[16px] font-medium text-[#3A3A3A] px-4 py-2 rounded-[5px] hover:bg-gray-100 transition-colors duration-200"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                  >
                    Başvur
                  </button>

                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute right-0 mt-2 w-[210px] rounded-[12px] p-[2px] space-y-[6px] z-50">
                    <div className="relative group/driver">
                      <Link to="/carrier">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[11px] leading-[13px] flex items-center justify-start px-3"
                        >
                          Yüksi Sürücü Başvuru
                        </Button>
                      </Link>
                      <div className="invisible opacity-0 group-hover/driver:visible group-hover/driver:opacity-100 transition-opacity duration-200 absolute left-full top-0 ml-2 z-50">
                        <div className="flex flex-col gap-[6px]">
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-[180px] h-[42px] !rounded-[24px] !bg-[#FF5B04] !text-white text-[14px] font-medium flex items-center justify-center"
                          >
                            Lojistik Kurye
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-[180px] h-[42px] !rounded-[24px] !bg-[#FF5B04] !text-white text-[14px] font-medium flex items-center justify-center"
                          >
                            Restoran Kurye
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[11px] leading-[13px] flex items-center justify-start px-3"
                    >
                      Franchising Başvuru
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[11px] leading-[13px] flex items-center justify-start px-3"
                    >
                      Kurumsal Üyelik - Yüksicik
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Button
                  variant="primary"
                  size="md"
                  className="w-[188px] h-[42px] !rounded-[5px] flex items-center justify-center gap-2"
                >
                  Giriş Yap
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>

                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 mt-2 w-[220px] bg-white rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50">
                  <div className="py-2">
                    <a
                      href="https://kurumsal.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>Kurumsal Giriş</p>
                        <p className="text-[12px] text-gray-500">İşletme hesabınıza erişin</p>
                      </div>
                    </a>
                    <a
                      href="https://bayi.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>Bayi Giriş</p>
                        <p className="text-[12px] text-gray-500">Bayi panelinize erişin</p>
                      </div>
                    </a>
                    <a
                      href="https://restoran.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>Restoran Giriş</p>
                        <p className="text-[12px] text-gray-500">Restoran panelinize erişin</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden order-1 lg:order-2">
              <button
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${iconColor}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              >
                <Icon
                  src={isMobileMenuOpen ? closeIcon : menuIcon}
                  alt={isMobileMenuOpen ? 'Kapat' : 'Menü'}
                  className="h-6 w-6"
                  style={iconFilter}
                />
              </button>
            </div>
          </div>
        </div>
        {barVisible && (
          <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-[#FF5B04] rounded-bl-[20px] rounded-br-[20px] h-[85px] -z-0" />
        )}
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-[rgba(171,171,171,0.6)] backdrop-blur-[3px] z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-[280px] bg-white rounded-tr-[10px] shadow-[12px_4px_9.9px_-2px_rgba(0,0,0,0.25)] z-50 lg:hidden overflow-y-auto">
            <div className="flex flex-col pt-[20px] pl-[24px] pb-8">
              {/* Kanguru ve Mesaj Balonu */}
              <div className="relative mb-8 flex items-start gap-3 pr-4">
                <img
                  src={kanguruGif}
                  alt="Yüksi kanguru"
                  className="w-[80px] h-auto object-contain flex-shrink-0"
                />
                <div className="relative mt-2 flex-1">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 text-[#FF5B04] px-4 py-3 rounded-[16px] shadow-sm">
                    <p className="text-[15px] font-semibold leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                      Size nasıl yardımcı olabilirim? 
                    </p>
                  </div>
                </div>
              </div>

              {/* Menü Öğeleri */}
              {defaultNavItems.map((item, index) => {
                const isActive = resolvedActiveItem === item.href;
                const spacing = index === 0 ? 'mb-[32px]' : 'mb-[32px]';
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`
                      text-[20px] font-medium transition-colors duration-200 ${spacing}
                      ${isActive
                        ? 'text-[#FF5B04]'
                        : 'text-[#3A3A3A]'
                      }
                    `}
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Başvur Dropdown */}
              <div className="mb-[32px]">
                <button
                  type="button"
                  onClick={() => setIsApplicationMenuOpen(!isApplicationMenuOpen)}
                  className="text-[20px] font-medium text-[#3A3A3A] transition-colors duration-200 flex items-center gap-2"
                  style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                  Başvur
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isApplicationMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isApplicationMenuOpen && (
                  <div className="mt-4 ml-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <Link to="/carrier" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[14px] leading-[16px] flex items-center justify-start px-3"
                        >
                          Yüksi Sürücü Başvuru
                        </Button>
                      </Link>
                      <div className="ml-4 flex flex-col gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-[180px] h-[42px] !rounded-[24px] !bg-[#FF5B04] !text-white text-[14px] font-medium flex items-center justify-center"
                        >
                          Lojistik Kurye
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-[180px] h-[42px] !rounded-[24px] !bg-[#FF5B04] !text-white text-[14px] font-medium flex items-center justify-center"
                        >
                          Restoran Kurye
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[14px] leading-[16px] flex items-center justify-start px-3"
                    >
                      Franchising Başvuru
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[14px] leading-[16px] flex items-center justify-start px-3"
                    >
                      Kurumsal Üyelik - Yüksicik
                    </Button>
                  </div>
                )}
              </div>

              {/* Giriş Yap Dropdown */}
              <div className="mt-[41px]">
                <button
                  type="button"
                  onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                  className="w-[180px] h-[42px] !rounded-[5px] bg-[#FF5B04] text-white flex items-center justify-center gap-2"
                >
                  <span className="text-[18px] font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                    Giriş Yap
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isLoginMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLoginMenuOpen && (
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="https://kurumsal.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-3 bg-gray-50 rounded-[10px] hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>Kurumsal Giriş</p>
                        <p className="text-[11px] text-gray-500">İşletme hesabınıza erişin</p>
                      </div>
                    </a>
                    <a
                      href="https://bayi.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-3 bg-gray-50 rounded-[10px] hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>Bayi Giriş</p>
                        <p className="text-[11px] text-gray-500">Bayi panelinize erişin</p>
                      </div>
                    </a>
                    <a
                      href="https://restoran.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-3 bg-gray-50 rounded-[10px] hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>Restoran Giriş</p>
                        <p className="text-[11px] text-gray-500">Restoran panelinize erişin</p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
