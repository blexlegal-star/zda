import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/hooks/useCartStore';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const { toggleCart, items } = useCartStore();
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/productos?search=${encodeURIComponent(searchTerm)}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 font-sans transition-all duration-300">
            {/* Top Bar - Slimmer */}
            <div className="bg-[#1a237e] text-white text-[10px] md:text-xs py-1.5 px-4 text-center font-medium">
                <p className="tracking-wide">📦 Envíos gratis en compras mayoristas | 🚀 Directo de fábrica a todo el país</p>
            </div>

            <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-6">
                {/* Logo - Consistent height */}
                <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
                    <img src="/logo.png" alt="ZDA" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* Header Links */}
                <div className="hidden md:flex items-center gap-6 mr-4">
                    <Link to="/productos" className="text-primary font-bold hover:text-primary/80 transition-colors">Productos</Link>
                    <a href="/#nosotros" className="text-primary font-bold hover:text-primary/80 transition-colors">Nosotros</a>
                </div>

                {/* Search Bar - Desktop - Slimmer and more modern */}
                <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-lg relative group">
                    <input
                        type="text"
                        placeholder="Buscar repuestos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-1.5 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1a237e]/10 focus:border-[#1a237e] transition-all"
                    />
                    <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#1a237e] text-white p-1.5 rounded-full hover:bg-[#e31c23] transition-colors">
                        <Search size={14} />
                    </button>
                </form>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={toggleCart}
                        className="relative text-gray-700 hover:text-[#1a237e] transition-colors p-2 rounded-full hover:bg-gray-100"
                    >
                        <ShoppingCart size={22} />
                        {itemCount > 0 && (
                            <span className="absolute top-1 right-1 bg-[#e31c23] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                                {itemCount}
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu & Search */}
            <div className={cn("md:hidden px-4 py-3 bg-gray-50 border-t", isMenuOpen ? "block" : "hidden")}>
                <form onSubmit={handleSearch} className="flex mb-4">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
