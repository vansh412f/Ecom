// src/components/admin/AdminLayout.jsx

import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Users } from 'lucide-react';
import useAuthStore from '../../state/authStore';

function AdminLayout() {
  const user = useAuthStore((state) => state.user);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-white ${
      isActive ? 'bg-[var(--border)] text-white' : 'text-[var(--foreground-secondary)]'
    }`;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r border-[var(--border)] bg-[var(--card)] md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-[var(--border)] px-4 lg:h-[60px] lg:px-6">
            <h1 className="text-xl font-bold text-white">WowCart Admin</h1>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink to="/admin" end className={navLinkClasses}>
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </NavLink>
              <NavLink to="/admin/orders" className={navLinkClasses}>
                <ShoppingBag className="h-4 w-4" /> Orders
              </NavLink>
              <NavLink to="/admin/products" className={navLinkClasses}>
                <Package className="h-4 w-4" /> Products
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-[var(--border)] bg-[var(--card)] px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <h2 className="text-lg font-semibold text-white">Admin Panel</h2>
          </div>
          <div className="text-right text-[var(--foreground-secondary)]">
            <p className="font-bold text-white">{user?.name}</p>
            <p className="text-xs">{user?.email}</p>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet /> {/* Admin page content will be rendered here */}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;