import { motion } from 'motion/react';
import { MessageCircle, Mail, Instagram, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface FooterProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="contact" className="relative bg-black border-t border-[#1e1e1e] pt-24 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Large CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-[#222222] text-neutral-400 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>START COLLABORATING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-tight"
          >
            Have an idea? Let's edit it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed"
          >
            Send over your raw footage or drop a message to claim your free trial clip. Fast responses via WhatsApp.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary WhatsApp redirect */}
            <button
              onClick={() => onOpenContact()}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Email button */}
            <a
              href={`mailto:${PORTFOLIO_INFO.email}?subject=Project%20Inquiry%20-%20Zaid%20Visuals%20Co.`}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#111111] border border-[#262626] hover:border-neutral-500 text-white font-medium text-sm transition-all duration-200 active:scale-95"
            >
              <Mail className="w-4 h-4 text-neutral-400" />
              <span>{PORTFOLIO_INFO.email}</span>
            </a>

            {/* Instagram button */}
            <a
              href={PORTFOLIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#111111] border border-[#262626] hover:border-neutral-500 text-white font-medium text-sm transition-all duration-200 active:scale-95"
            >
              <Instagram className="w-4 h-4 text-neutral-400" />
              <span>{PORTFOLIO_INFO.instagram}</span>
            </a>
          </motion.div>
        </div>

        {/* Brand & Footer Details */}
        <div className="pt-12 border-t border-[#1e1e1e] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-3">
            <span className="font-bold text-neutral-200">{PORTFOLIO_INFO.brandName}</span>
            <span className="text-neutral-700">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-neutral-600" /> Moradabad, UP
            </span>
          </div>

          <div className="text-center md:text-right text-neutral-400">
            © 2026 Zaid Visuals Co. Moradabad, UP. | Portfolio: <span className="text-white">{PORTFOLIO_INFO.portfolioHandle}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
