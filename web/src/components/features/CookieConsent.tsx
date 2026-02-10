import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[60] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#1a237e]">Privacidad y Cookies</h3>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación y ofrecerte contenidos de interés. Al continuar navegando, consideramos que aceptas nuestra política de cookies.
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={acceptCookies}
                        className="flex-1 bg-[#1a237e] text-white text-sm font-bold py-2.5 rounded-full hover:bg-[#e31c23] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Aceptar
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="px-6 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-full hover:bg-gray-50 transition-all"
                    >
                        Configurar
                    </button>
                </div>
            </div>
        </div>
    );
}
