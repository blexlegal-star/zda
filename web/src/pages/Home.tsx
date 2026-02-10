import { motion } from 'framer-motion';

export function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    return (
        <div className="pb-12">
            {/* Hero Section */}
            <section className="relative h-[600px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/home/hero-bg.jpg"
                        alt="ZDA Moto Parts"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight"
                    >
                        Comprá directo de <br />
                        China y disfrutá <br />
                        <span className="text-[#e31c23] font-extrabold">ahora!!!</span>
                    </motion.h1>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4 py-20 md:py-28">
                <motion.h2
                    {...fadeIn}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight"
                >
                    <span className="bg-gradient-to-r from-[#1a237e] to-[#e31c23] bg-clip-text text-transparent">
                        Obtené ahora todos los<br />beneficios exclusivos.
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="/assets/home/benefits-racing.jpg"
                            alt="Racing"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Card 2 */}
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="/assets/home/benefits-team.jpg"
                            alt="Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Card 3 */}
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="/assets/home/benefits-office.jpg"
                            alt="Office"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Nosotros Section */}
            <section id="nosotros" className="container mx-auto px-4 py-20 md:py-28">
                <motion.div
                    {...fadeIn}
                    className="flex items-center gap-4 mb-16 px-4"
                >
                    <div className="w-1.5 h-12 bg-[#e31c23]" />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="text-[#1a237e]">Nos</span><span className="text-[#e31c23]">otros</span>
                    </h2>
                </motion.div>

                <div className="space-y-24">

                    {/* Block 1: Image Left, Text Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] order-2 md:order-1 group">
                            <img
                                src="/assets/home/image-2.webp"
                                alt="Fábrica en China"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <motion.h3
                                {...fadeIn}
                                className="text-3xl md:text-4xl font-bold leading-tight"
                            >
                                <span className="bg-gradient-to-r from-[#1a237e] to-[#1a237e]/70 bg-clip-text text-transparent">Alianza estratégica</span> <br />
                                <span className="text-gray-900">Directo desde China</span>
                            </motion.h3>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Operamos con <strong className="text-gray-900">presencia física directa en China</strong>, lo que nos permite supervisar personalmente cada etapa del proceso: desde la selección de materiales en fábrica hasta el control de calidad pre-embarque.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Esta proximidad estratégica nos garantiza <strong className="text-gray-900">tiempos de respuesta inmediatos</strong> y la capacidad de adaptar pedidos a las necesidades específicas del mercado argentino y latinoamericano.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Block 2: Text Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="space-y-8">
                            <motion.h3
                                {...fadeIn}
                                className="text-3xl md:text-4xl font-bold leading-tight"
                            >
                                <span className="bg-gradient-to-r from-[#e31c23] to-[#e31c23]/70 bg-clip-text text-transparent">Calidad Certificada</span> <br />
                                <span className="text-gray-900">Directo de fábrica</span>
                            </motion.h3>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Al eliminar intermediarios, te ofrecemos <strong className="text-gray-900">repuestos certificados OEM y aftermarket premium</strong> con estándares internacionales de calidad (ISO 9001, TS 16949) a precios que desafían al mercado tradicional.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Cada producto pasa por rigurosos controles de calidad y cuenta con <strong className="text-gray-900">garantía de fábrica</strong>, asegurando tu inversión y la satisfacción de tus clientes finales.
                                </p>
                                <ul className="space-y-2 text-gray-600 text-base">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#e31c23] font-bold mt-1">✓</span>
                                        <span>Importación directa sin intermediarios</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#e31c23] font-bold mt-1">✓</span>
                                        <span>Certificaciones internacionales verificables</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#e31c23] font-bold mt-1">✓</span>
                                        <span>Stock permanente y logística ágil</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                            <img
                                src="/assets/home/about-store.jpg"
                                alt="Local ZDA"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
