import arrowRightIcon from '../../assets/icons/arrow-right.svg';

interface VehicleServiceSectionProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
}

export function VehicleServiceSection({
    title,
    description,
    image,
    imageAlt,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryClick,
    onSecondaryClick,
}: VehicleServiceSectionProps) {
    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                    {/* Left Side - Text and Buttons */}
                    <div className="w-full lg:w-1/2 lg:order-1 flex flex-col gap-6 sm:gap-8">
                        {/* Title */}
                        <h2
                            className="text-[#FF5B04] text-[40px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-bold leading-tight"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {title}
                        </h2>
                        
                        {/* Description */}
                        <p
                            className="text-[#333] text-sm sm:text-base md:text-lg lg:text-[24px] font-bold leading-relaxed whitespace-pre-wrap"
                            style={{ fontFamily: 'Urbanist, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {description}
                        </p>
                        
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <button
                                onClick={onPrimaryClick}
                                className="flex-1 bg-[#FF5B04] hover:bg-[#E55103] text-white font-bold text-base sm:text-lg lg:text-[24px] px-6 py-3 sm:py-4 rounded-[35px] flex items-center justify-center gap-2 transition-colors"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>{primaryButtonText}</span>
                                <img src={arrowRightIcon} alt="" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
                            </button>
                            
                            <button
                                onClick={onSecondaryClick}
                                className="flex-1 bg-[#FF5B04] hover:bg-[#E55103] text-white font-bold text-sm sm:text-base lg:text-[16px] px-6 py-3 sm:py-4 rounded-[35px] flex items-center justify-center gap-2 transition-colors"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>{secondaryButtonText}</span>
                                <img src={arrowRightIcon} alt="" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Side - Vehicle Image */}
                    <div className="w-full lg:w-1/2 lg:order-2 flex items-center justify-center">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
