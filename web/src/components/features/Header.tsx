import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/hooks/useCartStore';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleCart, items } = useCartStore();
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
            {/* Top Bar */}
            <div className="bg-primary text-white text-xs py-1 px-4 text-center">
                <p>Envíos a todo el país | Venta Mayorista y Minorista</p>
            </div>

            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src="/logo.png" alt="ZDA" className="h-12 w-auto object-contain" />
                </Link>

                {/* Header Links */}
                <div className="hidden md:flex items-center gap-6 mr-4">
                    <Link to="/productos" className="text-primary font-bold hover:text-primary/80 transition-colors">Productos</Link>
                    <a href="/#nosotros" className="text-primary font-bold hover:text-primary/80 transition-colors">Nosotros</a>
                </div>

                {/* Search Bar - Desktop */}
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/productos?search=${encodeURIComponent(isMenuOpen ? '' : (document.getElementById('desktop-search') as HTMLInputElement)?.value || '')}`; }} className="hidden md:flex flex-1 max-w-xl mx-4 relative">
                    <input
                        id="desktop-search"
                        type="text"
                        placeholder="Buscar repuestos..."
                        className="w-full border border-gray-300 rounded-l-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button type="submit" className="bg-primary text-white px-6 py-2 rounded-r-full hover:bg-primary/90 transition-colors">
                        <Search size={20} />
                    </button>
                </form>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleCart}
                        className="relative text-gray-700 hover:text-primary transition-colors p-2"
                    >
                        <ShoppingCart size={24} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {itemCount}
                            </span>
                        )}
                    </button>



                    <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu & Search */}
            <div className={cn("md:hidden px-4 py-3 bg-gray-50 border-t", isMenuOpen ? "block" : "hidden")}>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/productos?search=${encodeURIComponent((document.getElementById('mobile-search') as HTMLInputElement)?.value || '')}`; setIsMenuOpen(false); }} className="flex mb-4">
                    <input
                        id="mobile-search"
                        type="text"
                        placeholder="Buscar..."
                        className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
                    />
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md">
                        <Search size={20} />
                    </button>
                </form>
                <nav className="flex flex-col gap-2">
                    <Link to="/productos" className="py-2 text-primary font-bold text-sm border-b border-gray-100">Productos</Link>
                    <a href="/#nosotros" className="py-2 text-primary font-bold text-sm border-b border-gray-100">Nosotros</a>
                </nav>
            </div>
        </header>
    );
}
