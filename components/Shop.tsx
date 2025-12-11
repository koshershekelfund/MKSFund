import React, { useMemo, useState } from 'react';
import { ShoppingCart, Plus, Minus, AlertTriangle, ArrowRight, X, Star, ShieldCheck, MessageSquare } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  reviews: number;
};

type CartItem = {
  productId: string;
  quantity: number;
};

const products: Product[] = [
  {
    id: 'mug',
    name: 'Thank You Rabbi McDickerson Heart Mug',
    description: 'Sleek black ceramic mug with a red heart and “Thank you Rabbi McDickerson.” Perfect for coffee, tea, or late-night strategy sessions.',
    price: 245,
    images: [`${import.meta.env.BASE_URL}images/thank-you-rabbi-mcdickerson-heart-mug-black.jpeg`],
    rating: 4.8,
    reviews: 182,
  },
  {
    id: 'bottle',
    name: 'Rabbi McDickerson Kosher Shekel Fund Insulated Bottle',
    description: 'Matte black insulated bottle. One side: “Thank you Rabbi McDickerson” + heart. Reverse: “Kosher Shekel Fund” + heart. Durable and travel-ready.',
    price: 350,
    images: [
      `${import.meta.env.BASE_URL}images/rabbi-mcdickerson-kosher-shekel-fund-bottle-front.jpeg`,
      `${import.meta.env.BASE_URL}images/rabbi-mcdickerson-kosher-shekel-fund-bottle-back.jpeg`,
    ],
    rating: 4.9,
    reviews: 231,
  },
  {
    id: 'tumbler',
    name: 'Kosher Shekel Fund Turquoise Travel Tumbler',
    description: 'Bright turquoise travel tumbler with handle and lid, featuring “Kosher Shekel Fund” and a red heart. Eye-catching and go-ready.',
    price: 295,
    images: [`${import.meta.env.BASE_URL}images/kosher-shekel-fund-turquoise-travel-tumbler.jpeg`],
    rating: 4.7,
    reviews: 156,
  },
];

export const Shop: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? sum + (product.price * 0.9) * item.quantity : sum;
    }, 0);
  }, [cart]);

  const handleAdd = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const handleDecrement = (productId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleOpenProduct = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) setSelectedProduct(product);
  };

  const handleCloseProduct = () => setSelectedProduct(null);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1 text-gold-400">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Star
          key={idx}
          className={`w-4 h-4 ${idx < Math.round(rating) ? 'fill-gold-400 text-gold-400' : 'text-slate-600'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="pt-24 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Merch</p>
            <h1 className="text-4xl md:text-5xl font-serif text-slate-100 mt-3">Shop</h1>
            <p className="text-slate-400 mt-3 max-w-2xl">
              Limited-run pieces from the Kosher Shekel Fund universe. Add to cart, but be warned:
              demand exceeds supply.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-3 rounded-sm">
            <ShoppingCart className="text-gold-500" />
            <div>
              <p className="text-sm text-slate-400">Items in cart</p>
              <p className="text-xl font-semibold text-gold-500">{cartCount}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => handleOpenProduct(product.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/10"></div>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    {product.images.slice(1).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${product.name} view ${idx + 2}`}
                        className="w-12 h-12 object-cover border border-slate-800 bg-slate-950"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-xl font-serif text-gold-500">{product.name}</h3>
                  <p className="text-slate-400 text-sm mt-2">{product.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-slate-300">
                    {renderStars(product.rating)}
                    <span>{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 line-through decoration-slate-500">${product.price}</span>
                    <span className="text-lg font-semibold text-gold-500">${(product.price * 0.9).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAdd(product.id);
                    }}
                    className="flex items-center gap-2 bg-gold-500 text-slate-950 px-4 py-2 uppercase text-xs tracking-wider font-bold hover:bg-gold-400 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 border border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="text-gold-500" />
            <h2 className="text-2xl font-serif text-slate-100">Cart</h2>
          </div>

          {cart.length === 0 ? (
            <p className="text-slate-500 text-sm">Your cart is empty. Add something before it sells out.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <div
                    key={item.productId}
                    className="flex items-center justify-between border border-slate-800 p-4 bg-slate-950"
                  >
                    <div>
                      <p className="text-slate-100 font-semibold">{product.name}</p>
                      <div className="flex gap-2 items-center">
                        <p className="text-slate-600 text-xs line-through">${product.price}</p>
                        <p className="text-gold-500 text-xs">${(product.price * 0.9).toFixed(2)} each</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDecrement(item.productId)}
                        className="p-2 border border-slate-700 text-slate-300 hover:text-gold-500 hover:border-gold-500 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-slate-100">{item.quantity}</span>
                      <button
                        onClick={() => handleAdd(item.productId)}
                        className="p-2 border border-slate-700 text-slate-300 hover:text-gold-500 hover:border-gold-500 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-gold-500 font-semibold">
                      ${((product.price * 0.9) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                );
              })}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <AlertTriangle className="w-4 h-4 text-gold-500" />
                  <span>High demand. Inventory moves faster than ethics.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-lg font-semibold text-slate-100">Total: ${total.toFixed(2)}</div>
                  <button
                    onClick={handleCheckout}
                    className="flex items-center gap-2 bg-gold-500 text-slate-950 px-5 py-3 uppercase text-xs tracking-wider font-bold hover:bg-gold-400 transition-colors"
                  >
                    Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product detail overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Product Detail</p>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-100 mt-2">{selectedProduct.name}</h2>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-300">
                  {renderStars(selectedProduct.rating)}
                  <span>{selectedProduct.rating.toFixed(1)} • {selectedProduct.reviews} reviews</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400">Prime eligible (spiritually)</span>
                </div>
              </div>
              <button
                onClick={handleCloseProduct}
                className="text-slate-400 hover:text-gold-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <img
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover border border-slate-800 bg-slate-900"
                />
                {selectedProduct.images.length > 1 && (
                  <div className="flex gap-3">
                    {selectedProduct.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedProduct.name} alt ${idx + 1}`}
                        className="w-20 h-20 object-cover border border-slate-800 bg-slate-900"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-slate-300">{selectedProduct.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                  <span>Ships in 1-2 business days (after divine intervention).</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-slate-500 line-through">${selectedProduct.price}</span>
                  <div className="text-4xl font-bold text-gold-500">${(selectedProduct.price * 0.9).toFixed(2)}</div>
                  <span className="bg-red-900/50 text-red-400 text-xs font-bold px-2 py-1 rounded border border-red-500/30">10% OFF</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleAdd(selectedProduct.id);
                      handleCloseProduct();
                    }}
                    className="bg-gold-500 text-slate-950 px-6 py-3 font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      handleAdd(selectedProduct.id);
                      setShowCheckout(true);
                    }}
                    className="border border-gold-500 text-gold-500 px-6 py-3 font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-slate-950 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Buy Now
                  </button>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 text-sm text-slate-400">
                  <p className="font-semibold text-slate-200 mb-2">Customer snippets</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>“Pairs perfectly with midnight market scheming.”</li>
                    <li>“Five stars for audacity, four for dishwasher safety.”</li>
                    <li>“Would gift to my CPA, if I trusted him.”</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout overlay */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="bg-slate-900 border border-slate-800 p-8 relative">
              <button
                onClick={() => setShowCheckout(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-gold-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="text-gold-500" />
                <h2 className="text-2xl font-serif text-slate-100">Checkout</h2>
              </div>
              <p className="text-slate-400 mb-6">
                Our store isn’t accepting orders right now—everything is sold out due to high demand.
                If you still want to place an order, DM us on X and we’ll make it happen.
              </p>
              <div className="bg-slate-950 border border-slate-800 p-4 mb-6">
                {cart.length === 0 ? (
                  <p className="text-slate-500 text-sm">Your cart is empty.</p>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => {
                      const product = products.find((p) => p.id === item.productId);
                      if (!product) return null;
                      return (
                        <div key={item.productId} className="flex items-center justify-between text-sm text-slate-300">
                          <span>{product.name} x {item.quantity}</span>
                          <span className="text-gold-500">${((product.price * 0.9) * item.quantity).toFixed(2)}</span>
                        </div>
                      );
                    })}
                    <div className="flex items-center justify-between text-slate-200 font-semibold pt-3 border-t border-slate-800">
                      <span>Total</span>
                      <span className="text-gold-500">${total.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/KosherShekel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gold-500 text-slate-950 px-5 py-3 font-bold uppercase text-xs tracking-wider hover:bg-gold-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  DM @KosherShekel
                </a>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="border border-slate-700 text-slate-300 px-5 py-3 uppercase text-xs tracking-wider hover:border-gold-500 hover:text-gold-500 transition-colors"
                >
                  Keep Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
