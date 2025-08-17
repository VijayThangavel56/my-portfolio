import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Key, User } from "lucide-react"; // Simple icons
import { useApi } from "../hooks/useApi";

const sessionStore = {
  getItem: (key) => sessionStorage.getItem(key),
  setItem: (key, value) => sessionStorage.setItem(key, value),
  removeItem: (key) => sessionStorage.removeItem(key),
};


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {get} = useApi();

  // Auto-redirect if already logged in
  useEffect(() => {
    if (sessionStore.getItem('userId')) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const users = await get("/users");
        
    if (!users.email=== email) {
      toast.error("User not found");
      return;
    }   
    if (password === users.password) {
      sessionStorage.setItem('userId', users.email);
      toast.success("Welcome back!");
      setTimeout(() => navigate('/dashboard'), 500);
    } else {
      toast.error("Invalid password");
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Login failed. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-xs">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-1">Developer Access</h1>
            <p className="text-slate-400 text-sm">Secure portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="flex items-center text-sm text-slate-400">
                <User className="w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-400/50"
                placeholder="admin@yourdomain.com"
                autoFocus
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center text-sm text-slate-400">
                <Key className="w-4 h-4 mr-2" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-400/50"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 rounded-lg font-medium text-white transition-all ${
                isLoading ? "bg-slate-700" : "bg-fuchsia-600 hover:bg-fuchsia-700"
              }`}
            >
              {isLoading ? "Authenticating..." : "Unlock Dashboard"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              ← Return to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;