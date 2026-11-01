import { motion } from 'motion/react';
import { User, Clock, Scissors, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_INFO } from './data';

interface AboutProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function About({ onOpenContact }: AboutProps) {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-[#222222] text-neutral-400 mb-3">
              <User className="w-3.5 h-3.5 text-white" />
              <span>[04 // FOUNDER]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              About Me
            </h2>
          </motion.div>
        </div>

        {/* Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#111111] border border-[#222222] rounded-[16px] p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#222222]">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {PORTFOLIO_INFO.founder}
                  </h3>
                  <p className="text-xs font-mono uppercase text-neutral-400 mt-1">
                    Solo Video Editor • {PORTFOLIO_INFO.location}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-[#262626] flex items-center justify-center font-mono font-bold text-white text-base">
                  ZR
                </div>
              </div>

              {/* Exact required text from prompt */}
              <blockquote className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal mb-8">
                "3-4 months editing experience, focused and dedicated. Software: CapCut. I work 5-6 hours daily after school. I offer one free trial edit to show quality first. No outsourcing, I edit myself."
              </blockquote>

              {/* Verified Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#222222]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-[#282828] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">5–6 Hours Daily</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">High discipline night workflow</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-[#282828] shrink-0">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">CapCut Native</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Fast, trendy &amp; precise timing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-[#282828] shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">No Outsourcing</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">I hand-cut every single frame</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-[#282828] shrink-0">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Free Trial Clip</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Test quality before paying</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-400">
                Ready to review raw files via Google Drive
              </span>
              <button
                onClick={() => onOpenContact('Free Trial Edit Request')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-neutral-300 transition"
              >
                <span>Request Free Trial Edit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Workflow Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-[#111111] border border-[#222222] rounded-[16px] p-8"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#222222]">
              <h3 className="text-lg font-bold text-white tracking-tight">
                How We Collaborate
              </h3>
              <span className="text-xs font-mono text-neutral-500">4 STEPS</span>
            </div>

            <ol className="relative border-l border-[#262626] ml-3 space-y-6">
              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-xs font-mono text-white border border-[#333333]">
                  1
                </span>
                <h4 className="text-sm font-bold text-white">Share Raw Footage</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Upload raw files or phone footage to Google Drive in 1080p.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-xs font-mono text-white border border-[#333333]">
                  2
                </span>
                <h4 className="text-sm font-bold text-white">Precision Editing in CapCut</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Dead air cut, hooks engineered, SFX, zooms, and retention-focused captions added.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-xs font-mono text-white border border-[#333333]">
                  3
                </span>
                <h4 className="text-sm font-bold text-white">Review &amp; Revisions</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Private preview link shared. Up to 2 free revisions per video.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-xs font-mono text-white border border-[#333333]">
                  4
                </span>
                <h4 className="text-sm font-bold text-white">Master Delivery (24-48h)</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Full resolution clean render delivered and ready to publish.
                </p>
              </li>
            </ol>

            <div className="mt-8 pt-6 border-t border-[#222222] bg-[#0c0c0c] -mx-4 -mb-4 p-4 rounded-b-[16px]">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero bots, zero templates, pure human craftsmanship.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
