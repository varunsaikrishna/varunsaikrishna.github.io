import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-center font-mono">
            <Code size={16} className="text-cyan-400" />
            <p className="flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by Varun Kanulla
            </p>
          </div>
          <p className="text-sm font-mono">
            <span className="text-cyan-400">{'>'}</span> © {currentYear} All rights reserved.
          </p>
          <p className="text-xs text-slate-600 font-mono">
            // Powered by React + FastAPI + MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
