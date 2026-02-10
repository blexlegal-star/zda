import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Shield, Package, Award } from 'lucide-react';

export function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    return (
        <div className="bg-white">
            {/* Hero Section - Full Screen with Premium Aesthetics */}
            <section className="relative min-h-screen max-h-[900px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/home/hero-bg-new.avif"
                        alt="ZDA Moto Parts"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center max-w-7xl text-center pt-32 md:pt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Repuestos de Moto
                            <br />
                            Directo de Fábrica
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                            Importación directa desde China. Calidad certificada internacional a precios imbatibles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/productos"
                                className="bg-gradient-to-r from-[#1a237e] to-[#e91e63] hover:from-[#283593] hover:to-[#d81b60] text-white font-bold px-8 py-3 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Ver Catálogo Completo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Trust Bar - Premium Features */}
            <section className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-12 relative z-30 shadow-xl">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
                        {[
                            { icon: Truck, title: 'Envíos Gratis', subtitle: 'En compras mayoristas', color: 'bg-white/10' },
                            { icon: Shield, title: 'Garantía', subtitle: 'Directo de fábrica', color: 'bg-white/10' },
                            { icon: Package, title: 'Stock', subtitle: 'Permanente', color: 'bg-white/10' },
                            { icon: Award, title: 'Calidad', subtitle: 'Certificada ISO', color: 'bg-white/10' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className={`${feature.color} rounded-full p-4 mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                                <p className="text-sm text-white/70">{feature.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Showcase - Spacious Layout */}
            <section className="container mx-auto px-4 py-32 md:py-40 bg-white">
                <motion.div {...fadeIn} className="text-center mb-24 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900 tracking-tight">
                        Calidad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a237e] to-[#e91e63]">Profesional</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                        Trabajamos con las mejores fábricas para traerte repuestos de alto rendimiento.
                    </p>
                </motion.div>

                {/* Hero Image - Full Width Feel */}
                <motion.div
                    {...fadeIn}
                    className="mb-24 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/5 mx-auto max-w-[1400px]"
                >
                    <div className="relative aspect-[21/9] overflow-hidden">
                        <img
                            src="/assets/home/image-1.webp"
                            alt="ZDA Quality Manufacturing"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                    </div>
                </motion.div>

                {/* Grid Layout - Balanced */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1400px] mx-auto mb-24">
                    {[
                        { src: '/assets/home/image-2.webp', alt: 'Control de Calidad' },
                        { src: '/assets/home/image-3.webp', alt: 'Selección Premium' }
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            {...fadeIn}
                            transition={{ delay: i * 0.2 }}
                            className="rounded-[2rem] overflow-hidden shadow-xl shadow-blue-900/5 group"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Three Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { src: '/assets/home/image-4.webp', alt: 'Wide Product Range' },
                        { src: '/assets/home/image-5.webp', alt: 'Professional Service' },
                        { src: '/assets/home/benefits-racing.jpg', alt: 'Racing Quality Parts' }
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            {...fadeIn}
                            transition={{ delay: i * 0.15 }}
                            className="rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Premium Gradient */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#e31c23]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        {...fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                            ¿Listo para mejorar tu negocio?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-3xl mx-auto">
                            Contactanos hoy y descubrí cómo podemos ayudarte con repuestos de calidad certificada a precios directos de fábrica
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=543758436120"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-[#1a237e] px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl"
                        >
                            Contactar Ahora
                        </a>
                    </motion.div>
                </div>
            </section>
        </div >
    );
}
