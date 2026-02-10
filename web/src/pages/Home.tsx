

export function Home() {

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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                        Comprá directo de <br />
                        China y disfrutá <br />
                        ahora!!!
                    </h1>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4 py-20 md:py-28">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
                    <span className="text-[#1a237e]">Obtené ahora todos los</span><br />
                    <span className="text-[#e31c23]">beneficios exclusivos.</span>
                </h2>

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
                <div className="flex items-center gap-4 mb-16 px-4">
                    <div className="w-1.5 h-12 bg-[#e31c23]" />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="text-[#1a237e]">Nos</span><span className="text-[#e31c23]">otros</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {/* Block 1: Right Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-black">
                                Directo desde<br />China
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Imagínese como si estuviera en<br />las oficinas de China.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/home/about-factory.jpg"
                                alt="Oficinas en China"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Block 2: Left Image (Text Left in Design, Image Right actually looks like alternating or similar flow, checking design again: "Directo de fabrica" text is left, image right) */}
                    {/* Correcting based on "Directo de fabrica" screenshot: Text Left, Image Right again, but let's see. 
                       Actually the screenshot shows:
                       Top row: Image Left, Text Right ("Directo desde China")
                       Bottom row: Text Left ("Directo de fabrica"), Image Right? 
                       Wait, the user screenshot shows:
                       [Image] [Text: Directo desde China]
                       [Text: Directo de fabrica] [Image]
                       
                       So I will implement it exactly like that alternating.
                    */}

                    {/* Block 1: Image Left, Text Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] order-2 md:order-1 group">
                            <img
                                src="/assets/home/about-factory.jpg"
                                alt="Fábrica en China"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#1a237e] leading-tight">
                                Alianza estratégica <br />
                                <span className="text-gray-900">Directo desde China</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                                Operamos con presencia física en el mercado asiático, garantizando una supervisión rigurosa de cada etapa de producción y logística.
                            </p>
                        </div>
                    </div>


                    {/* Block 2: Text Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="space-y-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#e31c23] leading-tight">
                                Calidad Certificada <br />
                                <span className="text-gray-900">Directo de fábrica</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                                Eliminamos intermediarios para ofrecerte repuestos de alto rendimiento con estándares internacionales y precios altamente competitivos.
                            </p>
                            <a
                                href="https://api.whatsapp.com/send?phone=543758436120"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#25D366]/20 hover:bg-[#128c7e] hover:-translate-y-1 transition-all duration-300"
                            >
                                Contactar vía WhatsApp
                            </a>
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
