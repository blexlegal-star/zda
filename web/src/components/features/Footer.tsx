import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <img src="/logo.png" alt="ZDA" className="h-16 w-auto object-contain" />
                        </div>
                        <p className="text-gray-600 text-sm">
                            Tu proveedor de confianza para repuestos de moto. Calidad y precio directo de fábrica.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/" className="hover:text-[#1a237e] transition-colors">Inicio</Link></li>
                            <li><Link to="/productos" className="hover:text-[#1a237e] transition-colors">Productos</Link></li>
                            <li><a href="https://api.whatsapp.com/send?phone=543758436120" target="_blank" rel="noopener noreferrer" className="hover:text-[#e31c23] transition-colors font-medium">Contacto WhatsApp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Contacto</h3>
                        <p className="text-sm text-gray-600 mb-2">WhatsApp: +54 3758 43-6120</p>
                        <p className="text-sm text-gray-600">Email: contacto@zda.com.ar</p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} ZDA Repuestos. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
