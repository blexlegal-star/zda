import { X, Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/hooks/useCartStore';
import { cn } from '@/lib/utils';

export function CartDrawer() {
    const { items, removeItem, updateQuantity, isCartOpen, toggleCart } = useCartStore();

    // Format message for WhatsApp
    const generateWhatsAppLink = () => {
        if (items.length === 0) return '';

        let message = "Hola Samuel, mi nombre es ... y te consulto lo siguiente:%0A%0A";
        items.forEach(item => {
            message += `* ${item.quantity}x ${item.name} (COD: ${item.id})%0A`;
        });

        return `https://api.whatsapp.com/send?phone=543758436120&text=${message}`;
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
                    isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col",
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="p-4 border-b flex items-center justify-between bg-primary text-white">
                    <h2 className="font-bold flex items-center gap-2">
                        <ShoppingCart size={20} />
                        Mi Pedido ({items.length})
                    </h2>
                    <button onClick={toggleCart} className="hover:bg-white/10 p-1 rounded-full">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <ShoppingCart size={64} className="mb-4 opacity-20" />
                            <p>Tu carrito está vacío</p>
                            <button onClick={toggleCart} className="mt-4 text-primary font-medium hover:underline">
                                Ir a comprar
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b pb-4 last:border-0 relative bg-white">
                                <div className="w-20 h-20 bg-gray-50 rounded border flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-sm line-clamp-2 pr-6">{item.name}</h3>
                                    <div className="mt-2 flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-50"
                                        >
                                            <Minus size={12} />
                                        </button>
                                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-50"
                                        >
                                            <Plus size={12} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="absolute top-0 right-0 text-gray-400 hover:text-red-500"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-4 border-t bg-gray-50">
                        <a
                            href={generateWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-md hover:bg-[#25D366]/90 transition-colors shadow-sm"
                        >
                            Solicitar Cotización por WhatsApp
                        </a>
                        <button
                            onClick={toggleCart}
                            className="w-full mt-2 text-gray-500 text-sm hover:underline text-center"
                        >
                            Seguir comprando
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
