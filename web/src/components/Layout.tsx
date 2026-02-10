import { Outlet } from 'react-router-dom';
import { Header } from './features/Header';
import { Footer } from './features/Footer';

import { CartDrawer } from './features/CartDrawer';
import { FloatingWhatsApp } from './features/FloatingWhatsApp';
import { CookieConsent } from './features/CookieConsent';


export function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <CartDrawer />
            <main className="flex-grow pt-14 md:pt-16">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <CookieConsent />
        </div>
    );
}
