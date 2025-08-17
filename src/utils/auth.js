// src/utils/auth.js
export const sessionStore = {
  getItem: (key) => sessionStorage.getItem(key),
  setItem: (key, value) => sessionStorage.setItem(key, value),
  removeItem: (key) => sessionStorage.removeItem(key),
};

export const isAuthenticated = () => !!sessionStore.getItem('userId');