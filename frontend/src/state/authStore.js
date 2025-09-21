import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // --- STATE ---
  isLoggedIn: false,
  user: null,
token: null,
  // --- ACTIONS ---

  /**
   * Simulates a user login.
   * On success, updates state and returns the user object.
   * On failure, returns null.
   */
  register: async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }

      const data = await response.json();
      set({ isLoggedIn: true, user: data, token: data.token });
      localStorage.setItem('userInfo', JSON.stringify(data)); // Save user info to local storage
      return true; // Indicate success
    } catch (error) {
      console.error(error);
      return false; // Indicate failure
    }
  },

  login: async (email, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
      }

      const data = await response.json();
      set({ isLoggedIn: true, user: data, token: data.token });
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data; // Return the user object on success
    } catch (error) {
      console.error(error);
      return null; // Return null on failure
    }
  },

  logout: () => {
    set({ isLoggedIn: false, user: null, token: null });
    localStorage.removeItem('userInfo');
  },
}));

export default useAuthStore;