import { motion } from 'motion/react';
import { Mic, Zap, Video, CheckCircle2, MessageCircle, Layers } from 'lucide-react';
import { SERVICES, ServiceItem } from './data';

interface ServicesProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Mic':
        return <Mic className="w-6 h-6 text-white" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-white" />;
      case 'Video':
        return <Video className="w-6 h-6 text-white" />;
      default:
        return <Layers className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-[#222222] text-neutral-400 mb-3">
              <Layers className="w-3.5 h-3.5 text-white" />
              <span>[02 // SERVICES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              What I Edit
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-400 leading-relaxed">
              Every cut is engineered for maximum retention, crystal clarity, and seamless viewer flow.
            </p>
          </motion.div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex flex-col justify-between bg-[#111111] border border-[#222222] hover:border-neutral-600 rounded-[16px] p-7 transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] group"
            >
              <div>
                {/* Header with Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-[#2a2a2a] flex items-center justify-center group-hover:border-neutral-400 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Core Subtitle */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-mono uppercase text-neutral-400 mb-3">
                  {service.subtitle}
                </p>

                {/* Main brief description from prompt */}
                <p className="text-sm font-medium text-neutral-200 mb-6 pb-5 border-b border-[#222222]">
                  {service.description}
                </p>

                {/* Features Breakdown */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-400 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onOpenContact(`Inquiry: ${service.title}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-[#2a2a2a] text-xs font-semibold text-neutral-200 hover:text-white transition group/btn"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
                <span>Discuss on WhatsApp</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
