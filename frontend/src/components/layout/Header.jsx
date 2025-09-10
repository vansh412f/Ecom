import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { Search, ShoppingCart, Menu, User, Heart, Zap, MapPin, Phone, LogOut } from 'lucide-react';
import useCartStore from '../../state/cartStore';
import useAuthStore from '../../state/authStore';
function Header() {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

 // 2. Get auth state and actions
  const { isLoggedIn, user, logout } = useAuthStore();
  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur-lg border-b border-[var(--border)]">
      {/* Top bar with contact info */}
      <div className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="container mx-auto px-8 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-[var(--foreground-secondary)]">
                <Phone className="h-3 w-3" />
                <span>Address-WOW-CART</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--foreground-secondary)]">
                <MapPin className="h-3 w-3" />
                <span>Free Delivery in Delhi</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors">
                Store Locator
              </a>
              <a href="#" className="text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors">
                Track Order
              </a>
              <a href="#" className="text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-[var(--accent)] rounded-xl p-2">
              <Zap className="h-6 w-6 text-[var(--accent-foreground)]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">WowCart</h1>
              <p className="text-xs text-[var(--foreground-secondary)] -mt-1">Premium Home Electronics</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium">
              Refrigerators
            </a>
            <a href="#" className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium">
              TVs & Audio
            </a>
            <a href="#" className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium">
              Air Conditioners
            </a>
            <a href="#" className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium">
              Laundry
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative w-80">
            <input
              type="text"
              placeholder="Search appliances..."
              className="w-full bg-[var(--card)] border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-10 pr-4 py-2.5 rounded-xl focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--foreground-secondary)]" />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
              
              {/* --- THIS IS THE CORRECTED SECTION --- */}
           {isLoggedIn ? (
              <>
                <span className="text-white hidden md:block">Welcome, {user?.name}</span>
      <Link to="/profile/orders" className="text-sm text-gray-300 hover:text-white">My Orders</Link>
      <button onClick={handleLogout} className="p-2 ...">
        <LogOut className="h-6 w-6" />
      </button>

              </>
            ) : (
              <>
                <Link to="/wishlist" className="p-2 rounded-full text-white hover:text-[var(--accent)] hover:bg-[var(--card)]">
                  <Heart className="h-6 w-6" />
                </Link>
                <Link to="/login" className="p-2 rounded-full text-white hover:text-[var(--accent)] hover:bg-[var(--card)]">
                  <User className="h-6 w-6" />
                </Link>
              </>
            )}
            
            {/* The Cart Link is now correctly outside the conditional, so it's always shown */}
            <Link to="/cart" className="relative p-2 rounded-full text-white hover:text-[var(--accent)] hover:bg-[var(--card)]">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;