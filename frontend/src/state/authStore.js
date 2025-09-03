// src/state/authStore.js

import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // --- STATE ---
  isLoggedIn: false,
  user: null,

  // --- ACTIONS ---

  /**
   * Simulates a user login.
   * On success, updates state and returns the user object.
   * On failure, returns null.
   */
  login: (email, password) => {
    // In a real app, this would be an API call.
    if (email === 'user@wowcart.com' && password === 'password123') {
      const mockUser = {
        name: 'John Doe',
        email: email,
        role: 'admin', // Add the user role
      };
      set({ isLoggedIn: true, user: mockUser });
      return mockUser; // Return the user object
    }
    // Add a mock for a regular customer
    if (email === 'customer@wowcart.com' && password === 'password123') {
      const mockUser = {
        name: 'Jane Smith',
        email: email,
        role: 'customer', // Add the user role
      };
      set({ isLoggedIn: true, user: mockUser });
      return mockUser; // Return the user object
    }
    return null; // Return null on failure
  },

  logout: () => {
    set({ isLoggedIn: false, user: null });
  },
}));

export default useAuthStore;