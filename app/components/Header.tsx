'use client';

import { Sparkles, Search } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

export function Header() {
  return (
    <header className="relative z-20 px-4 py-4">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-white font-bold text-lg">AdSpark AI</span>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Connect Wallet */}
            <ConnectWallet className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20" />
            
            {/* Search */}
            <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
