"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { TarotLayout } from "~~/components/tarot/TarotLayout";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected } = useAccount();

  const handleReveal = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    // TODO: Call contract requestReading() here
    setTimeout(() => {
      toast.success("Fate request sent to the void (Mock)");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <TarotLayout>
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl text-center space-y-12">
        
        {/* Hero Section */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-200 to-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
            Secrets of the Void
          </h1>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            Your fate is encrypted on-chain. <br/>
            Only the spirits (and you) hold the key.
          </p>
        </div>

        {/* Crystal Ball / Interaction Placeholder */}
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleReveal}
        >
          {/* 光晕背景 */}
          <div className={`absolute inset-0 bg-primary/20 blur-[60px] rounded-full transition-all duration-700 ${isHovering || isLoading ? 'scale-125 opacity-80' : 'scale-100 opacity-40'}`} />
          
          {/* 水晶球主体 */}
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-black border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_0_40px_rgba(147,51,234,0.3)] transition-transform duration-500 ${isHovering ? 'scale-105' : ''}`}>
            <div className="text-center p-6">
              {isLoading ? (
                <div className="flex flex-col items-center gap-2">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
                  <span className="text-sm text-primary/80 animate-pulse">Summoning...</span>
                </div>
              ) : isHovering ? (
                <span className="text-2xl font-bold text-primary animate-pulse tracking-widest">
                  REVEAL FATE
                </span>
              ) : (
                <span className="text-6xl animate-pulse text-white/20">
                  🔮
                </span>
              )}
            </div>
            
            {/* 内部旋转光效 */}
            <div className={`absolute inset-2 rounded-full border border-primary/20 border-t-transparent ${isLoading ? 'animate-[spin_1s_linear_infinite]' : 'animate-[spin_4s_linear_infinite]'}`} />
            <div className={`absolute inset-6 rounded-full border border-purple-400/20 border-b-transparent ${isLoading ? 'animate-[spin_1s_linear_infinite_reverse]' : 'animate-[spin_3s_linear_infinite_reverse]'}`} />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          <FeatureCard 
            icon="🔒" 
            title="Encrypted Reading" 
            desc="Cards are drawn on-chain as FHE ciphertexts. No one sees your draw but you." 
          />
          <FeatureCard 
            icon="🤖" 
            title="AI Oracle" 
            desc="Decrypted locally, interpreted by AI. The wisdom is personalized and private." 
          />
          <FeatureCard 
            icon="⛓️" 
            title="On-Chain Proof" 
            desc="Your reading is verifiable, but the content remains a secret between you and the void." 
          />
        </div>

      </div>
    </TarotLayout>
  );
}

const FeatureCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="p-6 rounded-xl bg-base-300/40 border border-white/5 hover:border-primary/30 hover:bg-base-300/60 transition-all duration-300 group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-sm text-base-content/70">{desc}</p>
  </div>
);
