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
        setIsCategoriesOpen(false);
        setIsMenuOpen(false);
        navigate(`/productos?category=${categoryId}`);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 font-sans transition-all duration-300">
            {/* Top Bar - Smaller */}
            <div className="bg-[#1a237e] text-white text-[11px] md:text-xs py-1 px-4 text-center font-medium">
                <p className="tracking-wide">📦 Envíos gratis en compras mayoristas | 🚀 Directo de fábrica a todo el país</p>
            </div>

            <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-6">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
                    <img src="/logo.png" alt="ZDA" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation - Horizontal Categories */}
                <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
                    <Link to="/" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">Inicio</Link>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className="text-gray-700 hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
                        >
                            {cat.name}
                        </button>
                    ))}
                    <Link to="/nosotros" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">Nosotros</Link>
                </nav>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex relative w-64">
                    <input
                        type="text"
                        placeholder="Buscar repuestos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(e);
                            }
                        }}
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>

                {/* Cart Icon */}
                <button
                    onClick={toggleCart}
                    className="relative p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-[#e31c23] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            {/* Categories Dropdown Panel */}
            {isCategoriesOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40">
                    <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryClick(cat.id)}
                                    className="text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 hover:text-primary"
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
