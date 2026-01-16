import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';
import kurumsalImage from '../../assets/basvuru/kurumsal.png';
import { submitSiteContact } from '../../services/siteContactService';

interface CorporateFormValues {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export function CorporateForm() {
    const formik = useFormik<CorporateFormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validate: (values) => {
            const errors: Partial<Record<keyof CorporateFormValues, string>> = {};

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

            // Phone validation: min 5, max 50
            if (!values.phone) {
                errors.phone = 'Lütfen telefon numaranızı giriniz';
            } else if (values.phone.length < 5) {
                errors.phone = 'Telefon numaranız en az 5 karakter olmalıdır';
            } else if (values.phone.length > 50) {
                errors.phone = 'Telefon numaranız en fazla 50 karakter olabilir';
            }

            // Subject validation: min 2, max 200
            if (!values.subject) {
                errors.subject = 'Lütfen konu başlığını giriniz';
            } else if (values.subject.length < 2) {
                errors.subject = 'Konu başlığı en az 2 karakter olmalıdır';
            } else if (values.subject.length > 200) {
                errors.subject = 'Konu başlığı en fazla 200 karakter olabilir';
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
                const response = await submitSiteContact({
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    subject: values.subject,
                    message: values.message,
                    terms_accepted: true,
                });

                if (response.success) {
                    toast.success('Başvurunuz başarıyla iletildi! En kısa sürede size dönüş yapacağız. 🎉');
                    helpers.resetForm();
                } else {
                    toast.error('Bir şeyler ters gitti. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.');
                }
            } catch (error: unknown) {
                console.error('Corporate form error:', error);
                toast.error('Mesajınız gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.');
            }
        },
    });

    return (
        <section className="w-full bg-white pt-12 lg:pt-20 pb-8 lg:pb-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-stretch">
                    {/* Left - Kurumsal Image */}
                    <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-start">
                        <div className="relative w-full max-w-[800px] lg:max-w-none lg:translate-x-[-40px] transform translate-y-8 lg:-translate-y-8 lg:-mt-8">
                            <img
                                src={kurumsalImage}
                                alt="Yüksi Kurumsal Üyelik"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right - Form & content */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-8">
                        <div className="text-center lg:text-left">
                            <h1
                                className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#FF5B04] leading-tight mb-6"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Kurumsal Üye Olmak İçin Bizimle İletişime Geçin
                            </h1>

                            <form
                                onSubmit={formik.handleSubmit}
                                className="max-w-[532px] mx-auto lg:mx-0 space-y-4"
                            >
                                {/* İsim/Soy İsim */}
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="İsim/Soy İsim"
                                        error={!!(formik.touched.name && formik.errors.name)}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
                                    )}
                                </div>

                                {/* E-mail */}
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="E-mail"
                                        error={!!(formik.touched.email && formik.errors.email)}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                                    )}
                                </div>

                                {/* Telefon Numarası */}
                                <div>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Telefon Numarası"
                                        error={!!(formik.touched.phone && formik.errors.phone)}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                                    )}
                                </div>

                                {/* Mesajınızın Konusu */}
                                <div>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Mesajınızın Konusu"
                                        error={!!(formik.touched.subject && formik.errors.subject)}
                                    />
                                    {formik.touched.subject && formik.errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.subject}</p>
                                    )}
                                </div>

                                {/* Mesaj */}
                                <div>
                                    <Textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Mesaj"
                                        className="h-[182px]"
                                        error={!!(formik.touched.message && formik.errors.message)}
                                    />
                                    {formik.touched.message && formik.errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
                                    )}
                                </div>

                                {/* Gönder Butonu */}
                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                        className="w-full h-16 bg-[#333333] hover:bg-[#2a2a2a] text-white font-bold text-xl sm:text-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Bottom contact information */}
                        <div className="max-w-[790px] text-[#333333] text-sm sm:text-base space-y-3">
                            <p
                                className="font-semibold"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Kurumsal üye olmak için bizimle{' '}
                                <a
                                    href="mailto:info@yuksi.tr"
                                    className="text-[#FF5B04] underline"
                                >
                                    info@yuksi.tr
                                </a>{' '}
                                üzerinden ya da iletişim formu ile görüşlerinizi bizimle paylaşabilirsiniz
                            </p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                İletişim Numarası:
                                <span className="font-medium"> 0850 241 93 16</span>
                            </p>
                            <p
                                className="font-semibold"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                Ahmet Vefik Paşa OSB Mah. Bursa caddesi No:73 Kestel/BURSA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
