import { useState, useMemo, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { products, categories, type Product } from '@/data/products';
import { cn } from '@/lib/utils';
import { Link, useSearchParams } from 'react-router-dom';

export function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setSelectedCategory(category);
        } else {
            setSelectedCategory('all');
        }
    }, [searchParams]);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        if (categoryId === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ category: categoryId });
        }
    };

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'all') return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white border rounded-lg p-6 sticky top-24">
                        <h2 className="font-bold text-lg mb-4">Categorías</h2>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => handleCategoryChange('all')}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        selectedCategory === 'all'
                                            ? "bg-primary text-white"
                                            : "text-gray-600 hover:bg-gray-100"
                                    )}
                                >
                                    Todos los productos
                                </button>
                            </li>
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <button
                                        onClick={() => handleCategoryChange(cat.id)}
                                        className={cn(
                                            "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                            selectedCategory === cat.id
                                                ? "bg-primary text-white"
                                                : "text-gray-600 hover:bg-gray-100"
                                        )}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {selectedCategory === 'all'
                                ? 'Todos los Productos'
                                : categories.find(c => c.id === selectedCategory)?.name || 'Productos'}
                        </h1>
                        <span className="text-gray-500 text-sm">
                            {filteredProducts.length} resultados
                        </span>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                            <p className="text-gray-500">No se encontraron productos en esta categoría.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
                <span className="text-xs text-primary font-bold uppercase mb-1 tracking-wider">
                    {categories.find(c => c.id === product.category)?.name}
                </span>
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2" title={product.name}>
                    {product.name}
                </h3>

                <div className="mt-auto">
                    <Link
                        to={`/producto/${product.id}`}
                        className="w-full text-center bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-2 rounded text-sm font-bold transition-colors"
                    >
                        Ver Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
}
