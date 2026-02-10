

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
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-12">
                    Obtené ahora todos los beneficios<br />
                    <span className="text-[#e31c23]">exclusivos.</span>
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
            <section id="nosotros" className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-4">
                    <span className="text-[#1a237e]">Nos</span><span className="text-[#e31c23]">otros</span>
                </h2>

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

                    {/* Re-implementing Block 1 as Image Left, Text Right based on screenshot */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
                            <img
                                src="/assets/home/about-factory.jpg"
                                alt="Oficinas en China"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <h3 className="text-3xl font-bold text-black">
                                Directo desde<br />China
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Imagínese como si estuviera en<br />las oficinas de China.
                            </p>
                        </div>
                    </div>


                    {/* Block 2: Text Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-black">
                                Directo de<br />fábrica
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Ofrecemos productos con precios<br />
                                competitivos y estándares de<br />
                                calidad excepcionales.
                            </p>
                            <a
                                href="https://api.whatsapp.com/send?phone=543758436120"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#25D366] text-white px-6 py-2 rounded-md font-bold hover:bg-[#25D366]/90 transition-colors"
                            >
                                Whatsapp
                            </a>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/home/about-store.jpg"
                                alt="Local ZDA"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
