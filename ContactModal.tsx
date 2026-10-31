import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Mail, Phone, X, Check, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  packageTitle?: string;
}

export function ContactModal({ isOpen, onClose, initialMessage, packageTitle }: ContactModalProps) {
  // Configurable/Stored phone number with default fallback
  const [phone, setPhone] = useState(() => {
    return localStorage.getItem('zv_whatsapp_number') || PORTFOLIO_INFO.defaultWhatsAppNumber;
  });
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const defaultText = packageTitle 
    ? `Hi Zaid, I would like to book or discuss the "${packageTitle}" package from your portfolio.`
    : (initialMessage || "Hi Zaid, I saw your portfolio 'Zaid Visuals Co.' and I'd like to discuss video editing / get a free trial edit!");

  const [message, setMessage] = useState(defaultText);

  // Clean phone number for wa.me
  const cleanPhone = phone.replace(/\D/g, '');
  const waUrl = cleanPhone 
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saveCustomPhone = (newNum: string) => {
    setPhone(newNum);
    localStorage.setItem('zv_whatsapp_number', newNum);
    setIsEditingPhone(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#0d0d0d] border border-[#262626] rounded-2xl shadow-2xl p-6 sm:p-8 text-white z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DIRECT WHATSAPP REACHOUT
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Chat with Zaid Rajput
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                Moradabad, UP • Quick response within a few hours.
              </p>
            </div>

            {/* Primary WhatsApp Action */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                  Pre-filled WhatsApp Message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-white focus:outline-none rounded-xl p-3 text-sm text-neutral-200 resize-none font-sans"
                  placeholder="Write your message..."
                />
              </div>

              {/* Direct WhatsApp Launch Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Continue to WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Contacts Strip */}
              <div className="pt-4 border-t border-[#222222] space-y-3">
                <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                  Alternative direct methods:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Copy / Call Phone */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#141414] border border-[#222222]">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                      <div className="truncate">
                        <div className="text-neutral-400 text-[10px]">WhatsApp / Call</div>
                        <div className="font-mono text-neutral-200 truncate">
                          {phone === PORTFOLIO_INFO.defaultWhatsAppNumber ? "+91 (WhatsApp)" : phone}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyNumber}
                      className="px-2 py-1 text-[11px] rounded bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition shrink-0 ml-2"
                    >
                      {copied ? (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        "Copy"
                      )}
                    </button>
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${PORTFOLIO_INFO.email}?subject=${encodeURIComponent(packageTitle ? `Inquiry for ${packageTitle}` : 'Video Editing Inquiry - Zaid Visuals Co.')}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#141414] border border-[#222222] hover:border-neutral-600 transition group"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                      <div className="truncate">
                        <div className="text-neutral-400 text-[10px]">Direct Email</div>
                        <div className="font-mono text-neutral-200 truncate">{PORTFOLIO_INFO.email}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white shrink-0 ml-1" />
                  </a>
                </div>

                {/* Free trial hint */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-[#262626] text-neutral-400 text-xs">
                  <Sparkles className="w-4 h-4 text-neutral-200 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-neutral-200">1 Free Short Clip Trial:</strong> Send 30s of raw footage via Google Drive link on WhatsApp to test my cuts before making any payment.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
