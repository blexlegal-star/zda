import { Search, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/hooks/useCartStore';
import { categories } from '@/data/products';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
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

    const handleCategoryClick = (categoryId: string) => {
        navigate(`/productos?categoria=${categoryId}`);
        setIsMenuOpen(false);
        setIsCategoriesOpen(false);
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

                {/* Header Links - Desktop with Dropdown */}
                <div className="hidden md:flex items-center gap-6 mr-4">
                    {/* Productos Dropdown */}
                    <div className="relative group">
                        <button className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-1">
                            Productos
                            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id)}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-[#1a237e] font-medium text-sm border-b border-gray-100 last:border-b-0 transition-colors"
                                >
                                    {category.name}
                                </button>
                            ))}
                            <Link
                                to="/productos"
                                className="block w-full text-left px-4 py-3 hover:bg-[#1a237e] hover:text-white text-[#e31c23] font-bold text-sm transition-colors"
                            >
                                Ver Todos →
                            </Link>
                        </div>
                    </div>
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
                    {/* Productos con Categorías Expandibles */}
                    <div>
                        <button
                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                            className="w-full flex items-center justify-between py-2 text-primary font-bold text-sm border-b border-gray-100"
                        >
                            Productos
                            <ChevronDown size={16} className={cn("transition-transform", isCategoriesOpen && "rotate-180")} />
                        </button>
                        {isCategoriesOpen && (
                            <div className="pl-4 mt-2 space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategoryClick(category.id)}
                                        className="block w-full text-left py-1.5 text-gray-700 text-sm hover:text-[#1a237e] font-medium"
                                    >
                                        {category.name}
                                    </button>
                                ))}
                                <Link
                                    to="/productos"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full text-left py-1.5 text-[#e31c23] text-sm font-bold"
                                >
                                    Ver Todos →
                                </Link>
                            </div>
                        )}
                    </div>
                    <a href="/#nosotros" className="py-2 text-primary font-bold text-sm border-b border-gray-100">Nosotros</a>
                </nav>
            </div>
        </header>
    );
}
