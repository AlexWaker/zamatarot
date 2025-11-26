import React from "react";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "~~/components/helper/RainbowKitCustomConnectButton";

export const TarotLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen tarot-bg text-base-content font-serif relative overflow-hidden">
      {/* 装饰性背景元素：星星/光晕 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-base-300/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-primary tracking-widest hover:text-white transition-colors">
            🔮 MYSTIC FHE
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <RainbowKitCustomConnectButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center min-h-[calc(100vh-80px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-sm text-base-content/50 border-t border-white/5">
        <p>Powered by Zama FHEVM & OpenFHE</p>
      </footer>
    </div>
  );
};

