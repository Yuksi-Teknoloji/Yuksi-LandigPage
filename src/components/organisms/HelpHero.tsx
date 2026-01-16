import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import kangarooHelp from '../../assets/help/kangaroo-help.png';
import phoneKangaroo from '../../assets/help/phone-kangaroo.png';
import logoImage from '../../assets/logo.png';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { submitHelpRequest } from '../../services/helpService';

interface HelpFormValues {
    name: string;
    email: string;
    message: string;
}

export function HelpHero() {
    const formik = useFormik<HelpFormValues>({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: Partial<Record<keyof HelpFormValues, string>> = {};

            // Name validation: min 2, max 200
            if (!values.name) {
                errors.name = 'Lütfen isminizi giriniz';
            } else if (values.name.length < 2) {
                errors.name = 'İsminiz en az 2 karakter olmalıdır';
            } else if (values.name.length > 200) {
                errors.name = 'İsminiz en fazla 200 karakter olabilir';
            }

            // Email validation: required and valid format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!values.email) {
                errors.email = 'Lütfen e-posta adresinizi giriniz';
            } else if (!emailRegex.test(values.email)) {
                errors.email = 'Geçerli bir e-posta adresi giriniz';
            }

            // Message validation: min 2, max 5000
            if (!values.message) {
                errors.message = 'Lütfen mesajınızı yazınız';
            } else if (values.message.length < 2) {
                errors.message = 'Mesajınız en az 2 karakter olmalıdır';
            } else if (values.message.length > 5000) {
                errors.message = 'Mesajınız en fazla 5000 karakter olabilir';
            }

            return errors;
        },
        onSubmit: async (values, helpers) => {
            try {
                const response = await submitHelpRequest({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                });

                if (response.success) {
                    toast.success('Mesajınız başarıyla iletildi! En kısa sürede size dönüş yapacağız. 🎉');
                    helpers.resetForm();
                } else {
                    toast.error('Bir şeyler ters gitti. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.');
                }
            } catch (error: unknown) {
                console.error('Help form error:', error);
                toast.error('Mesajınız gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.');
            }
        },
    });
    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[822px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src={kangarooHelp}
                    alt="Yüksi lojistik hizmet"
                    className="absolute h-[155.84%] left-0 top-[-56.81%] w-[100.09%] max-w-none object-cover"
                    style={{ transform: 'scaleX(-1)' }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-20">
                <div className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:min-h-[700px] xl:min-h-[822px]">
                    {/* Left Side - Phone/Kangaroo Image - Hidden on mobile, visible on larger screens */}
                    <div className="hidden lg:block absolute left-0 lg:left-[4%] xl:left-[calc(8.33%+20px)] top-[180px] lg:top-[200px] xl:top-[220px]">
                        <div className="relative w-[280px] h-[370px] lg:w-[350px] lg:h-[460px] xl:w-[470px] xl:h-[682px]">
                            <img
                                src={phoneKangaroo}
                                alt="Yüksi telefon kanguru"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Small logo on phone */}
                        <div className="absolute left-[calc(25%-9.54px)] top-[520px] lg:top-[550px] xl:top-[579px] w-[60px] h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] flex items-center justify-center">
                            <img
                                src={logoImage}
                                alt="Yüksi Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Center/Right Side - Title and Form */}
                    <div className="w-full lg:ml-[calc(40%+20px)] xl:ml-[calc(45.83%+3px)] 2xl:ml-[calc(45.83%+50px)] lg:max-w-[550px] xl:max-w-[917px] 2xl:max-w-[1000px] flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        {/* Main Title */}
                        <h1
                            className="text-white text-[28px] sm:text-[36px] md:text-[45px] lg:text-[52px] xl:text-[65px] 2xl:text-[70px] font-bold leading-tight sm:leading-normal whitespace-pre-wrap mt-4 sm:mt-6 lg:mt-0"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <p className="mb-0">SANA NASIL</p>
                            <p>YADIMCI OLABİLİRİZ</p>
                        </h1>

                        {/* Contact Form */}
                        <form onSubmit={formik.handleSubmit} className="mt-4 sm:mt-6 lg:mt-8 flex flex-col gap-4 sm:gap-5">
                            {/* Form Title */}
                            <p
                                className="text-white text-[20px] sm:text-[24px] lg:text-[28px] font-medium"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Bize Ulaş
                            </p>

                            {/* Message Input */}
                            <div className="w-full sm:w-full lg:w-[calc(384px*2+20px)] xl:w-[calc(384px*2+20px)]">
                                <div className={`backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[10px] shadow-[0px_4px_18.3px_0px_rgba(0,0,0,0.25)] p-4 ${formik.touched.message && formik.errors.message ? 'ring-2 ring-red-400' : ''}`}>
                                    <textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Mesajınızı buraya yazın..."
                                        className="w-full h-[120px] sm:h-[140px] lg:h-[168px] bg-transparent border-none outline-none text-white placeholder-white/70 text-sm sm:text-base resize-none"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                    />
                                </div>
                                {formik.touched.message && formik.errors.message && (
                                    <p className="mt-1 text-sm text-red-300 font-medium">{formik.errors.message}</p>
                                )}
                            </div>

                            {/* Name and Email Inputs */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 w-full sm:w-full lg:w-[calc(384px*2+20px)] xl:w-[calc(384px*2+20px)]">
                                <div className="flex-1 lg:max-w-[384px] xl:max-w-[384px]">
                                    <p
                                        className="text-white text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium mb-2"
                                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                    >
                                        İsim / Soy İsim
                                    </p>
                                    <div className={`backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[10px] shadow-[0px_4px_18.3px_0px_rgba(0,0,0,0.25)] p-3 sm:p-4 h-[51px] flex items-center ${formik.touched.name && formik.errors.name ? 'ring-2 ring-red-400' : ''}`}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder=""
                                            className="w-full bg-transparent border-none outline-none text-white placeholder-white/70 text-sm sm:text-base"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="mt-1 text-sm text-red-300 font-medium">{formik.errors.name}</p>
                                    )}
                                </div>
                                <div className="flex-1 lg:max-w-[384px] xl:max-w-[384px]">
                                    <p
                                        className="text-white text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium mb-2"
                                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                    >
                                        E-mail Adresi
                                    </p>
                                    <div className={`backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[10px] shadow-[0px_4px_18.3px_0px_rgba(0,0,0,0.25)] p-3 sm:p-4 h-[51px] flex items-center ${formik.touched.email && formik.errors.email ? 'ring-2 ring-red-400' : ''}`}>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder=""
                                            className="w-full bg-transparent border-none outline-none text-white placeholder-white/70 text-sm sm:text-base"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="mt-1 text-sm text-red-300 font-medium">{formik.errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Send Button */}
                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-[#FF5B04] hover:bg-[#E55103] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-[18px] sm:text-[20px] lg:text-[24px] py-3 sm:py-4 px-6 sm:px-8 rounded-[35px] flex items-center justify-center gap-2 transition-colors self-center mt-4 sm:mt-5"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>{formik.isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'}</span>
                                {!formik.isSubmitting && (
                                    <img src={arrowRightIcon} alt="" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
                                )}
                            </button>
                        </form>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}
