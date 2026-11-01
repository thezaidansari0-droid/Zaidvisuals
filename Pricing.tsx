import { motion } from 'motion/react';
import { Tag, Check, MessageCircle, ArrowRight, ShieldCheck, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { SINGLE_PRICING, MONTHLY_PACKAGES } from './data';

interface PricingProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Pricing({ onOpenContact }: PricingProps) {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-[#222222] text-neutral-400 mb-3">
              <Tag className="w-3.5 h-3.5 text-white" />
              <span>[03 // RATES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Simple Rates. No Hidden Charges.
            </h2>
            <p className="mt-3 text-base text-neutral-400">
              Transparent, student-friendly pricing with agency-grade output. Pay per project or save with monthly retaining.
            </p>
          </motion.div>
        </div>

        {/* 2 Tables Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Table 1: PER VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between bg-[#111111] border border-[#222222] rounded-[16px] p-6 sm:p-8"
          >
            <div>
              {/* Table 1 Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Pay As You Go
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Per Video Rates
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-md bg-neutral-900 border border-[#2e2e2e] text-xs font-mono text-neutral-300">
                  Individual
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#202020]">
                {SINGLE_PRICING.map((item) => (
                  <div key={item.name} className="py-6 first:pt-6 last:pb-4 group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg font-bold text-white group-hover:text-neutral-200 transition">
                          {item.name}
                        </span>
                        {item.recommended && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-neutral-800 text-neutral-300 border border-neutral-700">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">
                          {item.price}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">/video</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-neutral-400 mb-3">
                      {item.details}
                    </div>

                    {/* Features tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenContact(`Per Video: ${item.name} (${item.price})`)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition group-hover:translate-x-1 duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
                      <span>Order {item.name} on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#202020] text-xs text-neutral-500 font-mono">
              Fast turnaround: completed within 24-48 hours.
            </div>
          </motion.div>

          {/* Table 2: MONTHLY PACKAGES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between bg-[#111111] border border-[#222222] rounded-[16px] p-6 sm:p-8 relative"
          >
            <div>
              {/* Table 2 Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Highest Value
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Monthly Packages
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-md bg-neutral-900 border border-[#2e2e2e] text-xs font-mono text-neutral-300">
                  Retainer
                </div>
              </div>

              {/* Monthly Packages List */}
              <div className="space-y-4 pt-6">
                {MONTHLY_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`p-5 rounded-xl border transition-all duration-200 ${
                      pkg.isPopular
                        ? 'bg-[#151515] border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.06)]'
                        : 'bg-[#0f0f0f] border-[#222222] hover:border-neutral-600'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg font-bold text-white">
                          {pkg.name}
                        </span>
                        {pkg.isPopular && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white text-black font-semibold">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-white">
                          {pkg.price}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">/mo</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-neutral-300 mb-3">
                      {pkg.reels} • <span className="text-neutral-400">{pkg.savings}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-400 mb-4">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenContact(`Monthly: ${pkg.name} (${pkg.price})`)}
                      className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition duration-200 ${
                        pkg.isPopular
                          ? 'bg-white text-black hover:bg-neutral-200 shadow-sm'
                          : 'bg-neutral-900 text-neutral-200 hover:text-white hover:bg-neutral-800 border border-[#2a2a2a]'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Book {pkg.name} on WhatsApp</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#202020] text-xs text-neutral-500 font-mono mt-6">
              Monthly packages include scheduled weekly batch deliveries.
            </div>
          </motion.div>
        </div>

        {/* Required TERMS block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-[#0d0d0d] border border-[#222222] rounded-2xl p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white bg-neutral-900 px-3 py-1.5 rounded-lg border border-[#2a2a2a] shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>TERMS &amp; WORKFLOW</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed">
              Delivery 24-48 hrs per video | 2 free revisions | 50% advance, rest on delivery (monthly: after every 4 reels) | Raw via Drive 1080p | Free trial edit available on one short clip.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
