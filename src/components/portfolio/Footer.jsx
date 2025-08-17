import React from "react";

export default function Footer() {
  return (
         <footer className="relative py-8 bg-slate-950 border-t border-fuchsia-500/20 z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <p className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Vijay Thangavel
            </p>
          </div>
          <p className="text-slate-400">
            &copy; 2024 Vijay Thangavel. Crafted with passion and precision.
          </p>
        </div>
      </footer>
  );
}
