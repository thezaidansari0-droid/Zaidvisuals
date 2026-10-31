import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenContact: () => void;
}

export function FloatingWhatsApp({ onOpenContact }: FloatingWhatsAppProps) {
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={onOpenContact}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111111] hover:bg-white text-white hover:text-black border border-[#2e2e2e] hover:border-white shadow-[0_4px_25px_rgba(0,0,0,0.8)] transition-all duration-300 active:scale-95"
        aria-label="Direct WhatsApp Contact"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500 group-hover:fill-black group-hover:text-black transition-colors" />
        <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
      </button>
    </div>
  );
}
