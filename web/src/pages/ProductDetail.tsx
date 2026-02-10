import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Truck, ShieldCheck, CreditCard } from 'lucide-react';
import { products, categories } from '../data/products';
import { useState } from 'react';
import { useCartStore } from '../hooks/useCartStore';

export function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCartStore();

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
                <Link to="/productos" className="text-primary hover:underline">
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    const categoryName = categories.find(c => c.id === product.category)?.name;



    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/productos" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Volver a productos
            </Link>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                    {/* Image Section */}
                    <div className="bg-gray-50 rounded-lg aspect-square flex items-center justify-center overflow-hidden border border-gray-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-sm text-primary font-bold uppercase tracking-wider mb-2 block">
                                {categoryName}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <Check size={12} className="mr-1" /> Stock Disponible
                                </span>
                                <span className="text-sm text-gray-500">COD: {product.id.toUpperCase()}</span>
                            </div>
                        </div>

                        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Consultar Precio</p>
                            <p className="text-xs text-gray-500 mt-2">
                                * Los precios pueden variar. Contactanos para una cotización actualizada.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-bold text-gray-900 mb-2">Descripción</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-auto">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-3 py-2 font-medium text-gray-900 w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => addItem(product, quantity)}
                                    className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                                >
                                    <ShoppingCart size={20} />
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
                            <div className="text-center">
                                <Truck className="mx-auto text-gray-400 mb-2" size={24} />
                                <p className="text-xs text-gray-500">Envíos a todo el país</p>
                            </div>
                            <div className="text-center">
                                <ShieldCheck className="mx-auto text-gray-400 mb-2" size={24} />
                                <p className="text-xs text-gray-500">Garantía de Calidad</p>
                            </div>
                            <div className="text-center">
                                <CreditCard className="mx-auto text-gray-400 mb-2" size={24} />
                                <p className="text-xs text-gray-500">Pagos Seguros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
