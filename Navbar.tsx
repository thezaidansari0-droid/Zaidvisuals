import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface NavbarProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'services', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#222222] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Zaid Visuals Co. Home"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-[#2e2e2e] flex items-center justify-center font-mono font-black text-sm tracking-tighter text-white group-hover:border-white transition-colors">
              ZV
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                {PORTFOLIO_INFO.brandShort}
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-emerald-400 transition-colors" />
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                Moradabad UP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f0f0f]/90 border border-[#222222] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#222222]'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button: Contact Me -> direct WhatsApp redirect / modal */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-black bg-white"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-[#222222] text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#222222] bg-[#0d0d0d] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#222222]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
