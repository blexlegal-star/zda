import { motion } from 'framer-motion';
import { useState } from 'react';

export function About() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement form submission logic (send to backend/email service)
        const formData = new FormData(e.currentTarget);
        console.log('Form data:', Object.fromEntries(formData));

        // Show success message
        setFormSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormSubmitted(false);
            e.currentTarget.reset();
        }, 3000);
    };

    return (
        <div className="bg-white pb-20">
            {/* Hero Section with Background Image */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/home/about-factory.jpg"
                        alt="ZDA Factory"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-2 h-16 bg-[#e31c23] rounded-full" />
                            <h1 className="text-5xl md:text-7xl font-bold text-white">
                                <span className="text-white">Nos</span>
                                <span className="text-[#e31c23]">otros</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 font-light">
                            Tu socio estratégico en repuestos de moto desde China
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="container mx-auto px-4 py-20 md:py-28">
                <div className="space-y-32">
                    {/* Block 1: Alianza Estratégica */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                        <motion.div
                            {...fadeIn}
                            className="rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1 group"
                        >
                            <img
                                src="/assets/home/image-2.webp"
                                alt="Fábrica en China"
                                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div
                            {...fadeIn}
                            className="space-y-6 order-1 md:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-[#1a237e] to-[#283593] bg-clip-text text-transparent">
                                    Alianza Estratégica
                                </span>
                                <br />
                                <span className="text-gray-900">Directo desde China</span>
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Operamos con <strong className="text-gray-900">presencia física directa en China</strong>, lo que nos permite supervisar personalmente cada etapa del proceso: desde la selección de materiales en fábrica hasta el control de calidad pre-embarque.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Esta proximidad estratégica nos garantiza <strong className="text-gray-900">tiempos de respuesta inmediatos</strong> y la capacidad de adaptar pedidos a las necesidades específicas del mercado argentino y latinoamericano.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Block 2: Calidad Certificada */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                        <motion.div
                            {...fadeIn}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-[#e31c23] to-[#ff4444] bg-clip-text text-transparent">
                                    Calidad Certificada
                                </span>
                                <br />
                                <span className="text-gray-900">Directo de Fábrica</span>
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Al eliminar intermediarios, te ofrecemos <strong className="text-gray-900">repuestos certificados OEM y aftermarket premium</strong> con estándares internacionales de calidad (ISO 9001, TS 16949) a precios que desafían al mercado tradicional.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Cada producto pasa por rigurosos controles de calidad y cuenta con <strong className="text-gray-900">garantía de fábrica</strong>, asegurando tu inversión y la satisfacción de tus clientes finales.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Importación directa sin intermediarios',
                                    'Certificaciones internacionales verificables',
                                    'Stock permanente y logística ágil',
                                    'Asesoramiento técnico especializado'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e31c23]/10 flex items-center justify-center mt-0.5">
                                            <span className="text-[#e31c23] font-bold text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            {...fadeIn}
                            className="rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <img
                                src="/assets/home/about-store.jpg"
                                alt="Local ZDA"
                                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    {...fadeIn}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-[#1a237e]">Hablemos</span>{' '}
                            <span className="text-[#e31c23]">de tu proyecto</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Dejanos tus datos y te contactamos para asesorarte
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                        {formSubmitted && (
                            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                                ✅ ¡Gracias! Recibimos tu consulta y te contactaremos pronto.
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nombre *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e] transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e] transition-all"
                                    placeholder="+54 9 11 1234-5678"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e] transition-all"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                Empresa (opcional)
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e] transition-all"
                                placeholder="Nombre de tu empresa"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                Mensaje *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e] transition-all resize-none"
                                placeholder="Contanos qué necesitás..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#1a237e] to-[#283593] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                        >
                            Enviar Consulta
                        </button>

                        <p className="text-sm text-gray-500 text-center mt-4">
                            También podés contactarnos directamente por WhatsApp usando el botón verde 👉
                        </p>
                    </form>
                </motion.div>
            </section>
        </div>
    );
}
