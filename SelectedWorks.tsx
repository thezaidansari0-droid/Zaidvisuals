import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, ExternalLink, Play, Film, CheckCircle2 } from 'lucide-react';
import { VIDEO_WORKS, VideoWork } from './data';

export function SelectedWorks() {
  const [activeWork, setActiveWork] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1e1e1e]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-[#222222] text-neutral-400 mb-3">
              <Film className="w-3.5 h-3.5 text-white" />
              <span>[01 // PORTFOLIO]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected Works
            </h2>
            <p className="mt-2 text-base sm:text-lg text-neutral-400 font-medium">
              Real edits, no templates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 text-xs font-mono text-neutral-500 bg-[#0c0c0c] border border-[#222222] px-4 py-2.5 rounded-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>High-Retention CapCut Workflows • 1080p Master Files</span>
          </motion.div>
        </div>

        {/* 3 Video Cards in Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VIDEO_WORKS.map((work: VideoWork, index: number) => {
            const driveDirectUrl = work.iframeSrc.replace('/preview', '/view');
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col bg-[#111111] border border-[#222222] hover:border-neutral-600 rounded-[16px] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Video Player Frame */}
                <div className="relative w-full aspect-[9/14] sm:aspect-[9/13] lg:aspect-[9/14] bg-[#000000] overflow-hidden border-b border-[#222222]">
                  {/* Google Drive Preview Iframe */}
                  <iframe
                    src={work.iframeSrc}
                    title={`${work.title} - Video Player`}
                    className="w-full h-full border-0 absolute inset-0 z-10"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />

                  {/* Top Bar Overlay */}
                  <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-neutral-300 border border-white/10">
                      {work.category}
                    </span>
                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto p-1.5 rounded-md bg-black/85 backdrop-blur-md text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                      title="Open in Google Drive / Full Screen"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-[#111111]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition">
                        {work.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500">
                        #0{index + 1}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                      {work.tagline}
                    </p>

                    {/* Feature tags */}
                    <div className="space-y-1.5 mb-5">
                      {work.keyFeatures.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action strip */}
                  <div className="pt-4 border-t border-[#1e1e1e] flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="text-neutral-500">CapCut Edit</span>
                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 transition"
                    >
                      <span>Fullscreen Drive</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small reassurance notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-neutral-500 font-mono"
        >
          Want to see how your specific footage would look? Ask for a <span className="text-white underline underline-offset-4 decoration-neutral-600">Free 30s Trial Edit</span> with zero commitment.
        </motion.div>
        import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, ExternalLink, Play, Film, CheckCircle2 } from 'lucide-react';
import { VIDEO_WORKS, VideoWork } from './data';

export function SelectedWorks() {
  const [activeWork, setActiveWork] = useState<string | null>(null);

  const handleInstaOpen = () => {
    const username = "zaidvisuals.co";
    const appLink = `instagram://user?username=${username}`;
    const webLink = `https://www.instagram.com/${username}/`;
    window.location.href = appLink;
    setTimeout(() => {
      window.open(webLink, "_blank");
    }, 600);
  };

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1e1e1e]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-[#222222] text-neutral-400 mb-3">
              <Film className="w-3.5 h-3.5 text-white" />
              <span>[01 // PORTFOLIO]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected Works
            </h2>
            <p className="mt-2 text-base sm:text-lg text-neutral-400 font-medium">
              Real edits, no templates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 text-xs font-mono text-neutral-500 bg-[#0c0c0c] border border-[#222222] px-4 py-2.5 rounded-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>High-Retention CapCut Workflows • 1080p Master Files</span>
          </motion.div>
        </div>

        {/* 3 Video Cards in Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VIDEO_WORKS.map((work: VideoWork, index: number) => {
            const driveDirectUrl = work.iframeSrc.replace('/preview', '/view');
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col bg-[#111111] border border-[#222222] hover:border-neutral-600 rounded-[16px] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Video Player Frame */}
                <div className="relative w-full aspect-[9/14] sm:aspect-[9/13] lg:aspect-[9/14] bg-[#000000] overflow-hidden border-b border-[#222222]">
                  <iframe
                    src={work.iframeSrc}
                    title={`${work.title} - Video Player`}
                    className="w-full h-full border-0 absolute inset-0 z-10"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-neutral-300 border border-white/10">
                      {work.category}
                    </span>
                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto p-1.5 rounded-md bg-black/85 backdrop-blur-md text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                      title="Open in Google Drive / Full Screen"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between bg-[#111111]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition">
                        {work.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500">
                        #0{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                      {work.tagline}
                    </p>
                    <div className="space-y-1.5 mb-5">
                      {work.keyFeatures.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#1e1e1e] flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="text-neutral-500">CapCut Edit</span>
                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 transition"
                    >
                      <span>Fullscreen Drive</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* >>> YAHAN SE NAYA BUTTON ADD KIYA HAI <<< */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={handleInstaOpen}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#222222] bg-[#111111] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-mono tracking-wide"
          >
            View 50+ More Edits on Instagram
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Small reassurance notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-neutral-500 font-mono"
        >
          Want to see how your specific footage would look? Ask for a <span className="text-white underline underline-offset-4 decoration-neutral-600">Free 30s Trial Edit</span> with zero commitment.
        </motion.div>
      </div>
    </section>
  );
            }
      </div>
    </section>
  );
}
