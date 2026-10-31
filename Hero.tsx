import { motion } from 'motion/react';
import { Play, MessageCircle, Mail, Instagram, MapPin, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Gradients & Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gradient pointer-events-none" />
      
      {/* Subtle top spotlight */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability / Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-[#111111] border border-[#262626] text-neutral-300 mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-medium">CAPCUT SPECIALIST</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">AVAILABLE FOR NEW PROJECTS</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] max-w-4xl"
        >
          Cuts That Keep People Watching.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance"
        >
          I'm <strong className="text-white font-semibold">Zaid from Moradabad</strong> — I edit Podcasts, Talking-Head, Reels &amp; YouTube videos that retain audience. CapCut Specialist. 5-6 hours daily dedication. Student by day, editor by night.
        </motion.p>

        {/* Two Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Watch My Edits -> scroll to #work */}
          <a
            href="#work"
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-neutral-900 border border-[#2a2a2a] hover:border-neutral-500 text-white font-medium text-sm transition-all duration-200 active:scale-95 shadow-md"
          >
            <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
            <span>Watch My Edits</span>
          </a>

          {/* WhatsApp / Contact Button */}
          <button
            onClick={onOpenContact}
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </button>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#1e1e1e] w-full max-w-3xl"
        >
          {/* Exact required trust text */}
          <p className="text-xs sm:text-sm text-neutral-400 font-mono tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              Based in Moradabad, UP
            </span>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <span className="text-neutral-300">Available Worldwide</span>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a
              href={`mailto:${PORTFOLIO_INFO.email}`}
              className="text-neutral-300 hover:text-white transition underline underline-offset-4 decoration-neutral-700"
            >
              {PORTFOLIO_INFO.email}
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a
              href={PORTFOLIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              IG: {PORTFOLIO_INFO.instagram}
            </a>
          </p>

          {/* Quick value counters */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="bg-[#0e0e0e] border border-[#222222] p-3.5 rounded-xl">
              <div className="text-xs text-neutral-500 font-mono flex items-center gap-1 mb-1">
                <Clock className="w-3 h-3" /> TURNAROUND
              </div>
              <div className="text-lg font-bold text-white">24–48 Hours</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Fast delivery guarantee</div>
            </div>

            <div className="bg-[#0e0e0e] border border-[#222222] p-3.5 rounded-xl">
              <div className="text-xs text-neutral-500 font-mono flex items-center gap-1 mb-1">
                <Sparkles className="w-3 h-3 text-emerald-400" /> TRIAL OFFER
              </div>
              <div className="text-lg font-bold text-white">1 Free Edit</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Test quality on short clip</div>
            </div>

            <div className="bg-[#0e0e0e] border border-[#222222] p-3.5 rounded-xl">
              <div className="text-xs text-neutral-500 font-mono flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3 h-3" /> CRAFTSMANSHIP
              </div>
              <div className="text-lg font-bold text-white">100% Solo</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">No outsourcing to others</div>
            </div>

            <div className="bg-[#0e0e0e] border border-[#222222] p-3.5 rounded-xl">
              <div className="text-xs text-neutral-500 font-mono flex items-center gap-1 mb-1">
                <Clock className="w-3 h-3" /> DAILY FOCUS
              </div>
              <div className="text-lg font-bold text-white">5–6 Hours</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Every night after school</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
