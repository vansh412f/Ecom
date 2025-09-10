
import React from 'react';
import { Link } from 'react-router-dom'; 
import { ShoppingCart, Eye, Star, Truck, Zap } from 'lucide-react';
import useCartStore from '../../state/cartStore';

function ProductCard(product) { // 2. Receive the whole product object as a prop
  const { _id, images, name, brand, price, mrp, rating, featured, reviewCount } = product;
  const savings = mrp ? mrp - price : 0;
  const addToCart = useCartStore((state) => state.addToCart);
 return (
    <Link to={`/products/${_id}`} className="group block">
      <div className="bg-gradient-to-br from-[var(--card)] to-transparent border border-[var(--border)] rounded-3xl overflow-hidden h-full hover:-translate-y-1 transition-transform duration-300">
        {/* Image Section */}
        <div className="relative bg-[var(--card)]/50 p-4 border-b border-[var(--border)]">
           {featured && (
              <span className="absolute top-4 left-4 text-xs bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold px-3 py-1 rounded-full z-10 flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                Featured
              </span>
            )}
            {savings > 0 && (
              <span className="absolute top-4 right-4 text-xs bg-red-500 text-white font-semibold px-3 py-1 rounded-full z-10">
                Save ${savings.toLocaleString()}
              </span>
            )}
            <img
              src={images[0]}
              alt={name}
              className="w-full h-56 object-cover rounded-2xl"
            />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--accent)]">{brand}</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{rating}</span>
                  <span className="text-xs text-[var(--foreground-secondary)]">({reviewCount})</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white h-14 mt-2 line-clamp-2 group-hover:text-[var(--accent)] transition-colors leading-tight">
                {name}
              </h3>

              <div className="space-y-1 pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-[var(--accent)]">${price.toLocaleString()}</span>
                  {mrp && (
                    <span className="text-sm text-[var(--foreground-secondary)] line-through">
                      ${mrp.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          
          {/* 3. The "View Details" button is removed, and this button prevents navigation */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link> 
  );
}

export default ProductCard;